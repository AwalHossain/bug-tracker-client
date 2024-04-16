"use client";

import { useAppSelector } from "@/redux/hooks";
import { useCallback, useState } from "react";

import { useGetOneWorkspaceQuery } from "@/redux/api/workspace/workspaceApi";
import { Workspace } from "@/types/common";
import { useParams, useRouter } from "next/navigation";
import ComboBoxComponent from "../workspace/workSpaceComponents/ComboBoxComponent";

export function ComboboxDemo() {
  // get workspace id from url
  const { workspaceId } = useParams();

  const { isLoading: workSpaceLoading } = useGetOneWorkspaceQuery(
    workspaceId as string,
    {
      refetchOnMountOrArgChange: true,
    },
  );
  const [newId, setWorkspaceId] = useState("");
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const { workspace: getWorkspace } = useAppSelector(
    (state) => state.worksapce,
  );
  const workspaces = user?.workspaceMembers.map((member) => member.workspace);
  const handleWorkspaceSelect = useCallback(
    (selectedWorkspace: Workspace) => {
      if (selectedWorkspace) {
        setWorkspaceId(selectedWorkspace.id);
        router.push(`/dashboard/${selectedWorkspace.id}`);
      }
    },
    [router],
  );

  return (
    <ComboBoxComponent
      workspaces={workspaces}
      onWorkspaceSelect={handleWorkspaceSelect}
      getWorkspace={getWorkspace}
    />
  );
}
