import { useCreateInvitationMutation } from "@/redux/api/invitation/invitationApi";
import { useAppSelector } from "@/redux/hooks";
import { FormEvent, useState } from "react";
import { WorkspaceFormProps } from "./CreateWorkSpaceForm";

interface InvitePeopleFormProps {
  workspaceName: string;
  className?: string;
}

export default function InvitePeopleForm({
  onNextClick,
  onShowInvite,
}: WorkspaceFormProps) {
  const [emailAddresses, setEmailAddresses] = useState("");

  const [createInvitation] = useCreateInvitationMutation();
  const { workspace } = useAppSelector((state) => state.worksapce);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: emailAddresses,
      workspaceId: workspace.id,
    };
    const result = await createInvitation(data).unwrap();

    console.log("result from the create invitation", result);
  };

  return (
    <div className="py-28 mx-28">
      <h2 className="text-2xl font-normal mb-4">
        Invite People to your Workspace:
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={emailAddresses}
          onChange={(e) => setEmailAddresses(e.target.value)}
          className="w-full border-b text-2xl border-gray-300 rounded-md py-1 px-4 mb-3 focus:outline-none"
          placeholder="Awal Hossain's Workspace"
        />
        <p className="text-gray-500 mb-12">
          You can also use the name of your company or organization
        </p>
        <button
          type="submit"
          className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
        >
          Next
        </button>
      </form>
    </div>
  );
}
