import useAuth from "@/hooks/useAuth";
import React from "react";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  console.log("isLoading auth", isLoading, "isAuthenticated", isAuthenticated);

  // Render a loading state while the user data is loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
}
