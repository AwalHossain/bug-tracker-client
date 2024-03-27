"use client";

import HomePage from "@/HomePage/Home/Home";
import { useLoadUserQuery } from "@/redux/api/auth/authApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isLoading: loading, data } = useLoadUserQuery(null);
  console.log("data", data);

  useEffect(() => {
    console.log("data", data?.email);
    if (data?.email) {
      setIsLoading(false);
      router.replace("/dashboard/tickets");
    } else {
      setIsLoading(false);
    }
  }, [data, router]);

  if (isLoading || loading) {
    return <div>Loading from the primary layout...</div>;
  }

  return (
    <main>
      <HomePage />
    </main>
  );
}
