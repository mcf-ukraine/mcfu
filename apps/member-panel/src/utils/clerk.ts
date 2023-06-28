import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { type SignInError } from "../types/clerk";

export const isSignInError = (e: unknown): e is SignInError =>
  typeof e === "object" &&
  e !== null &&
  "errors" in e &&
  Array.isArray((e as SignInError).errors);

export const useHomeRedirect = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/");
    }
  }, [isSignedIn, router]);
};
