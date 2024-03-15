/* eslint-disable react/display-name */
import { useLoadUserQuery } from "@/redux/api/auth/authApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return function (props: any) {
    const router = useRouter();
    const { isLoading, data } = useLoadUserQuery(null);

    useEffect(() => {
      if (!isLoading && !data?.data?.email) {
        router.replace("/login");
      }
    }, [isLoading, data, router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
