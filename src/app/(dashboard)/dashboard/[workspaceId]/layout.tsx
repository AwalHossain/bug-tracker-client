"use client";

import { Spinner } from "@/components/common/Spinner";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import useAuth from "@/hooks/useAuth";
import { useGetOneWorkspaceQuery } from "@/redux/api/workspace/workspaceApi";
import type { Metadata } from "next";
import { useParams } from "next/navigation";

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

  // get workspace id from url
  const { workspaceId } = useParams();

  const { isLoading: workSpaceLoading } = useGetOneWorkspaceQuery(
    workspaceId as string,
    {
      refetchOnMountOrArgChange: true,
    },
  );

  if (isLoading || workSpaceLoading) return <Spinner className="middle" />;

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
