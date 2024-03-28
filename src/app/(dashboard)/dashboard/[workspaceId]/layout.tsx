"use client";

import { Spinner } from "@/components/common/Spinner";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import useAuth from "@/hooks/useAuth";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Dashboard",
  description: "bug tracker dashboard ",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Spinner className="middle" />;

  return (
    isAuthenticated && (
      <>
        <Header />
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="w-full pt-16">{children}</main>
        </div>
      </>
    )
  );
}
