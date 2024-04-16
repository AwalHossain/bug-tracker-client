"use client";
import { useLoadUserQuery } from "@/redux/api/auth/authApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const router = useRouter();
  const { isLoading, data } = useLoadUserQuery(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isLoading && !data?.data?.email) {
      router.replace("/login");
    } else if (!isLoading && data?.data?.email) {
      setIsAuthenticated(true);
    }
  }, [isLoading, data, router]);

  return { isAuthenticated, isLoading };
};

export default useAuth;
