"use client";

import IssueBoard from "@/components/tables/issue-tables/issue-board";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  return (
    <>
      <div className=" p-4 md:p-8 pt-6">
        <p>This is issue Board</p>
        <IssueBoard />
      </div>
    </>
  );
}
