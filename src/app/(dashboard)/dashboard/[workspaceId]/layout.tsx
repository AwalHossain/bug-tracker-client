"use client";

import Sidebar from "@/components/layout/sidebar";
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
  const { workspaceId } = useParams();
  console.log("workspaceId layout", workspaceId);

  // const {
  //   isLoading: workSpaceLoading,
  //   error,
  //   data,
  // } = useGetOneWorkspaceQuery(workspaceId as string);
  // console.log("isLoading auth", isLoading); // Add this line
  // const { user } = useAppSelector((state) => state.auth);
  // const userDefaultWorkspacId = user?.workspaceMembers[0]?.workspaceId;
  // get workspace id from url

  // console.log("workspac result form layotu", data, "error", error);

  // if (workSpaceLoading) {
  //   return <div>Loading...workspace</div>;
  // }

  // if (error) {
  //   return NotFound();
  // }
  return (
    <>
      {/* <AutheticatedLayout> */}
      {/* <Header /> */}
      <div className="flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
      {/* </AutheticatedLayout> */}
    </>
  );
}
