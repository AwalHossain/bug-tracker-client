"use client";

import CreateAvatar from "@/components/workspace/CreateAvatar";
import CreateWorkSpaceForm from "@/components/workspace/CreateWorkSpaceForm";
import InvitePeopleForm from "@/components/workspace/InvitePeopleForm";
import { useState } from "react";

export default function Workspace() {
  const [showInviteSection, setShowInviteSection] = useState<boolean>(false);
  const [showCreateAvatar, setShowCreateAvatar] = useState<boolean>(false);
  const [workspaceName, setWorkspaceName] = useState("");

  const handleNextClick = (name: string) => {
    setWorkspaceName(name);
    setShowInviteSection(true);
  };

  const handleShowAvatar = (name: string) => {
    setShowCreateAvatar(true);
  };

  return (
    <div className="h-screen w-full relative">
      <div className=" py-28 h-screen mx-28">
        <div
          className={`bg-white transition-all duration-500 ease-in-out transform w-full ${
            showInviteSection
              ? "-translate-y-full opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100 pointer-events-auto"
          }`}
        >
          <CreateWorkSpaceForm
            onNextClick={handleNextClick}
            onShowInvite={setShowInviteSection}
          />
        </div>
      </div>

      <div
        className={`bg-white transition-all duration-500 ease-in-out transform absolute w-full top-0 ${
          showInviteSection
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <InvitePeopleForm
          onNextClick={handleShowAvatar}
          onShowAvatar={setShowCreateAvatar}
        />
      </div>

      <div
        className={`bg-white transition-all duration-500 ease-in-out transform absolute w-full top-0 ${
          showCreateAvatar
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <CreateAvatar onNextClick={handleNextClick} />
      </div>
    </div>
  );
}
