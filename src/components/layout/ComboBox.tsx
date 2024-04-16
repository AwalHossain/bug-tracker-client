"use client";

import { useAppSelector } from "@/redux/hooks";
import { useCallback, useState } from "react";

import { Workspace } from "@/types/common";
import { useRouter } from "next/navigation";
import ComboBoxComponent from "../workspace/workSpaceComponents/ComboBoxComponent";

export function ComboboxDemo() {
  const [workspaceId, setWorkspaceId] = useState("");
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

  console.log("workspaces get", workspaces);

  return (
    <ComboBoxComponent
      workspaces={workspaces}
      onWorkspaceSelect={handleWorkspaceSelect}
      getWorkspace={getWorkspace}
    />
  );
}
