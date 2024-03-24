import { useCreateWorkspaceMutation } from "@/redux/api/workspace/workspaceApi";
import { FormEvent, useState } from "react";

export interface WorkspaceFormProps {
  onNextClick: (workspaceName: string) => void;
  // other props...
  onShowInvite?: (showInvite: boolean) => void;
  onShowAvatar?: (showAvatar: boolean) => void;
}

function CreateWorkSpaceForm({
  onNextClick,
  onShowInvite,
}: WorkspaceFormProps) {
  const [workspaceName, setWorkspaceName] = useState("");
  const [createWorkspace] = useCreateWorkspaceMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      name: workspaceName,
    };
    console.log("data from the create workspace form", data);

    const res = await createWorkspace(data).unwrap();

    console.log("res from the create workspace", res);

    onNextClick(workspaceName);
    if (onShowInvite) {
      onShowInvite(true);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-normal mb-4">Name your Workspace:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
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

export default CreateWorkSpaceForm;
