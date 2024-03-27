"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useInvitation } from "@/hooks/useInvitation";
import { useUserLoginMutation } from "@/redux/api/auth/authApi";
import { handleResponse } from "@/services/handleResponse";
import { IUser } from "@/types/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Spinner } from "../common/Spinner";
import GoogleSignInButton from "../github-auth-button";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const { workspaceId, localEmail, token } = useInvitation();
  const defaultValues = useMemo(
    () => ({
      email: "demo@gmail.com",
    }),
    [],
  );
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: IUser) => {
    // signIn("credentials", {
    //   email: data.email,
    //   callbackUrl: callbackUrl ?? "/dashboard",
    // });

    try {
      if (workspaceId && localEmail && token) {
        data.workspaceId = workspaceId;
        data.token = token;
      }
      console.log("data from the login page", data);

      const res = await userLogin(data).unwrap();
      console.log("res from the login pagewo", res);

      if (res?.data?.accessToken) {
        handleResponse(res, router);
      }
    } catch (error: any) {
      console.log("error from the login page", error?.data as any);

      // toast.error(error?.data?.message || "Something went wrong");
      toast({
        title: "error",
        variant: "destructive",
        description: error?.data?.message || "Something went wrong",
      });
    }
  };

  useEffect(() => {
    if (localEmail) {
      console.log("localEmail", localEmail);
      defaultValues.email = localEmail;
    }
  }, [localEmail, defaultValues]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your Password..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isLoading ? (
            <Spinner className="mx-auto" />
          ) : (
            <Button
              disabled={isLoading}
              className="ml-auto w-full"
              type="submit"
            >
              Continue With Email
            </Button>
          )}
          <p className="text-center text-sm font-semibold">
            {` Don't have an account ?`}
            <Link href="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <GoogleSignInButton />
    </>
  );
}
