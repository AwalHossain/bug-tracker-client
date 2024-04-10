"use client";

import AutheticatedLayout from "@/components/layout/AutheticatedLayout";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { useGetOneWorkspaceQuery } from "@/redux/api/workspace/workspaceApi";
import type { Metadata } from "next";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import NotFound from "./404";

const metadata: Metadata = {
  title: "Dashboard",
  description: "bug tracker dashboard ",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { workspaceId } = useParams();
  console.log("workspaceId layout", workspaceId);

  const {
    isLoading: workSpaceLoading,
    error,
    data,
  } = useGetOneWorkspaceQuery(workspaceId as string);
  // console.log("isLoading auth", isLoading); // Add this line
  // const { user } = useAppSelector((state) => state.auth);
  // const userDefaultWorkspacId = user?.workspaceMembers[0]?.workspaceId;
  // get workspace id from url

  // console.log("workspac result form layotu", data, "error", error);
  if (error) {
    return NotFound();
  }
  return (
    <Suspense fallback={<div>loading...</div>}>
      <AutheticatedLayout>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </div>
      </AutheticatedLayout>
    </Suspense>
  );
}
