"use client";
import { useLoadUserQuery } from "@/redux/api/auth/authApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const router = useRouter();
  const { isLoading, data, isError } = useLoadUserQuery(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !data?.data?.email) {
      router.replace("/login");
    } else if (!isLoading && data?.data?.email) {
      setIsAuthenticated(true);
    }

    // Set initialLoading to false if the query is not loading or encounters an error
    setInitialLoading(isLoading || isError);
  }, [isLoading, data, isError, router]);

  return { isAuthenticated, isLoading: initialLoading };
};

export default useAuth;
