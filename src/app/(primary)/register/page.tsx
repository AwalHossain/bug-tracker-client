"use client";
import { FormInput } from "@/components/auth/FormInput";
import { UserForm } from "@/components/auth/UserForm";
import CircleLoader from "@/components/custom/CircleLoader";
import { useInvitation } from "@/hooks/useInvitation";
import { useUserRegiserMutation } from "@/redux/api/auth/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { IUser } from "@/types/Auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import logo from "../../../assets/images/bug-logo.png";

export default function Register() {
  const { register, handleSubmit, setValue } = useForm<IUser>();
  const [userRegiser, { isLoading }] = useUserRegiserMutation();

  const { workspaceId, localEmail, token } = useInvitation();

  const handelRegister = async (data: IUser): Promise<void> => {
    if (workspaceId && localEmail && token) {
      data.workspaceId = workspaceId;
      data.token = token;
    }
    try {
      if (data.password!.length < 6) {
        toast.error("Password must be at least 6 characters !!!");
        return;
      }
      console.log("data from the Registration page", data);

      // const res = await userRegiser(data).unwrap();
      console.log("res from the Registrion page", res);

      if (res?.data?.accessToken) {
        toast.success("Registration successful");
      }
      storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (error: any) {
      console.log("error from the reg page", error?.data as any);

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
      <UserForm register={register} onSubmit={handleSubmit(handelRegister)}>
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
          type="text"
          name="name"
          placeholder="Name"
        />
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
          Sign Up
        </button>
        <p className="text-center text-sm font-semibold">
          Already have an account ?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </UserForm>
    </div>
  );
}
