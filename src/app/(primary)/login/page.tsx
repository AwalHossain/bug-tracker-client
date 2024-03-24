"use client";
import { FormInput } from "@/components/auth/FormInput";
import { UserForm } from "@/components/auth/UserForm";
import CircleLoader from "@/components/custom/CircleLoader";
import { useInvitation } from "@/hooks/useInvitation";
import { useUserLoginMutation } from "@/redux/api/auth/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { IUser } from "@/types/Auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import logo from "../../../assets/images/bug-logo.png";

export default function Login() {
  const { register, handleSubmit, setValue } = useForm<IUser>();
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const { workspaceId, localEmail, token } = useInvitation();
  const router = useRouter();

  const handelLogin = async (data: IUser): Promise<void> => {
    try {
      if (workspaceId && localEmail && token) {
        data.workspaceId = workspaceId;
        data.token = token;
      }
      console.log("data from the login page", data);

      // const res = await userLogin(data).unwrap();
      console.log("res from the login pagewo", res);

      if (res?.data?.accessToken) {
        toast.success("Login successful");
      }
      storeUserInfo({ accessToken: res?.data?.accessToken });

      // redirect to the dashboard
      router.replace("/workspace");
    } catch (error: any) {
      console.log("error from the login page", error?.data as any);

      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (localEmail) {
      console.log("localEmail", localEmail);
      setValue("email", localEmail);
    }
  }, [localEmail, setValue]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 py-10">
      <UserForm register={register} onSubmit={handleSubmit(handelLogin)}>
        <div className="mx-auto w-20">
          <Image src={logo} alt="Logo" />
        </div>
        {isLoading && (
          <div>
            <CircleLoader />
          </div>
        )}
        <FormInput
          register={register}
          type="email"
          name="email"
          placeholder="Email"
        />
        <FormInput
          register={register}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="primary-btn" type="submit">
          Login
        </button>
        <p className="text-center text-sm font-semibold">
          {` Don't have an account ?`}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </UserForm>
    </div>
  );
}
