import { getFromLocalStorage } from "@/utils/local-storage";
import { useEffect, useState } from "react";

export const useInvitation = () => {
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);
  const [localEmail, setLocalEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const invitationString = getFromLocalStorage("invitation");
    let invitation = null;
    if (invitationString) {
      invitation = JSON.parse(invitationString as string);
      setWorkspaceId(invitation?.workspaceId);
      setLocalEmail(invitation?.email);
      setToken(invitation?.token);
    }
  }, []);

  return { workspaceId, localEmail, token };
};
