"use client";
import { useCreateInvitationMutation } from "@/redux/api/invitation/invitationApi";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Spinner } from "../common/Spinner";
import { WorkspaceFormProps } from "./CreateWorkSpaceForm";

interface InvitePeopleFormProps {
  workspaceName: string;
  className?: string;
}

export default function InvitePeopleForm({
  onNextClick,
  onShowInvite,
}: WorkspaceFormProps) {
  const router = useRouter();
  const [emailAddresses, setEmailAddresses] = useState("");

  const [createInvitation, { isLoading }] = useCreateInvitationMutation();
  const { workspace } = useAppSelector((state) => state.worksapce);
  console.log("workspace from the invite people form", workspace);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: emailAddresses,
      workspaceId: workspace?.id,
    };
    const result = await createInvitation(data).unwrap();

    console.log("result from the create invitation", result);
    if (result?.success) {
      console.log("result from inside", result.success);

      router.replace(`/dashboard/${workspace.id}`);
    }
  };

  return (
    <div className="py-8 sm:py-16 md:py-28 mx-4 sm:mx-8 md:mx-28">
      <h2 className="text-xl sm:text-2xl font-normal mb-4">
        Invite People to your Workspace:
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={emailAddresses}
          onChange={(e) => setEmailAddresses(e.target.value)}
          className="w-full border-b text-xs sm:text-sm md:text-2xl border-gray-300 rounded-md py-1 px-4 mb-3 focus:outline-none"
          placeholder="Enter Email Addresss (or paste multiple addresses separated by commas or spaces)"
        />
        <p className="text-gray-500 mb-12">
          You can also use the name of your company or organization
        </p>

        {isLoading ? (
          <Spinner className="" />
        ) : (
          <button
            type="submit"
            className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            Next
          </button>
        )}
      </form>
    </div>
  );
}
