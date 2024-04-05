import { useState } from "react";
import { WorkspaceFormProps } from "./CreateWorkSpaceForm";

export default function CreateAvatar({
  onNextClick,
  onShowAvatar,
}: WorkspaceFormProps) {
  const [emailAddresses, setEmailAddresses] = useState("");
  const handleSubmit = async () => {
    // Make API request to backend with workspaceName and emailAddresses
    // const response = await fetch('/api/invite', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ workspaceName, emailAddresses }),
    // });
    onNextClick("workspaceName2");
    if (onShowAvatar) {
      onShowAvatar(true);
    }
  };
  return (
    <div className="py-28 mx-28">
      <h2 className="text-2xl font-normal mb-4">
        Invite People to your Workspace:
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={"workspaceName"}
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
          Last step
        </button>
      </form>
    </div>
  );
}
