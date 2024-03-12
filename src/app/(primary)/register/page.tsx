"use client";
import CircleLoader from "@/components/custom/CircleLoader";
import { useUserRegiserMutation } from "@/redux/api/auth/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { IUser } from "@/types/Auth";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import logo from "../../../assets/images/grabbug-logo.png";

export default function Register() {
  const { register, handleSubmit } = useForm<IUser>();
  const [userRegiser, { isLoading }] = useUserRegiserMutation();

  const handelRegister = async (data: IUser): Promise<void> => {
    try {
      if (data.password!.length < 6) {
        toast.error("Password must be at least 6 characters !!!");
        return;
      }
      console.log("data from the Registration page", data);

      const res = await userRegiser(data).unwrap();
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

  // const handle = async (e) => {
  //     if (data.password!.length < 6) {
  //         return cogoToast.error("Password must be at least 6 characters !!!");
  //     }
  //     await login(data);
  //     e.preventDefault();
  //     console.log("sometiung");
  // };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 py-10">
      <form
        onSubmit={handleSubmit(handelRegister)}
        // onSubmit={(e) => handle(e)}
        className="mx-6 flex w-full flex-col space-y-6 rounded-lg border bg-white px-7 py-10 shadow-lg lg:w-2/5"
      >
        {/* logo */}
        <div className="mx-auto w-44">
          <Image src={logo} alt="Logo" />
        </div>
        {isLoading && (
          <div>
            <CircleLoader />
          </div>
        )}

        <input
          className="rounded-lg border-gray-300  py-4 text-sm shadow transition hover:shadow-lg"
          type="text"
          required
          placeholder="Name"
          {...register("name")}
        />

        <input
          className="rounded-lg border-gray-300  py-4 text-sm shadow transition hover:shadow-lg"
          type="email"
          required
          placeholder="Email"
          {...register("email")}
        />
        <input
          className="rounded-lg border-gray-300 py-4  text-sm shadow transition hover:shadow-lg"
          type="password"
          required
          placeholder="Password"
          {...register("password")}
        />

        <button className="primary-btn" type="submit">
          Sign Up
        </button>

        {/* already registered */}
        <p className="text-center text-sm font-semibold">
          Already have an account ?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
