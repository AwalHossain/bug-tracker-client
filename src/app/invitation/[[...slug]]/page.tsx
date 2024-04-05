"use client";

import { Spinner } from "@/components/common/Spinner";
import { useCheckInvitationQuery } from "@/redux/api/invitation/invitationApi";
import { useAppSelector } from "@/redux/hooks";
import { QueryError } from "@/types/common";
import { setToLocalStorage } from "@/utils/local-storage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function InvitationPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  console.log("searchParam", searchParams, "params", params);

  const email = searchParams.email;
  const invitation = JSON.stringify(searchParams);
  const token = searchParams.token;
  const workspaceId = searchParams.workspaceId;

  // // Store the values in local storage
  if (searchParams.email && searchParams.token && searchParams.workspaceId) {
    setToLocalStorage("invitation", invitation);
  }

  const url = `teamInvitation?email=${email}&token=${token}&workspaceId=${workspaceId}`;

  const { data, error, isLoading } = useCheckInvitationQuery(url);

  useEffect(() => {
    console.log("data from the invitation page", data);

    if (data?.statusCode === 401 && data?.message === "User not signed up") {
      // redirect to the sign up page
      router.replace("/signup");
    }

    if (data?.statusCode === 200 && !user?.email) {
      router.replace("/login");
    } else if (data?.statusCode === 200 && user?.email) {
      router.replace(`/workspace/${workspaceId}`);
    }

    if (data?.statusCode === 200) {
      router.replace(`/workspace/${workspaceId}`);
    }

    if (error) {
      const newError: QueryError = error as QueryError;
      if (
        newError.status === 401 &&
        newError.data.message === "User not signed up"
      ) {
        router.replace("/register");
      }
    }
  }, [data, error, router, user?.email, workspaceId]);

  if (isLoading) {
    return <Spinner className="middle" />; // Render your spinner component when loading
  }

  return null; // Don't render anything when not loading
}
