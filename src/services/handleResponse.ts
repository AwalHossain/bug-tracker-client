import { toast } from "@/components/ui/use-toast";
import { storeUserInfo } from "@/services/auth.service";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleResponse = (res: any, router: AppRouterInstance) => {
  const isData = res?.data;
  if (isData?.accessToken) {
    // store the token in the local storage
    toast({
      title: "success",
      variant: "success",
      description: "User logged in successfully",
    });
    storeUserInfo({ accessToken: isData?.accessToken });
    if (isData?.workspaceMembers.length > 0) {
      const workspaceId = isData?.workspaceMembers[0]?.workspaceId;
      router.replace(`/workspace/${workspaceId}`);
    } else {
      router.replace("/dashboard");
    }
  }
};
