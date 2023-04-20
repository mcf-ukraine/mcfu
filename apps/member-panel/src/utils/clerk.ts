import { type SignInError } from "../types/clerk";

export const isSignInError = (e: unknown): e is SignInError =>
  typeof e === "object" &&
  e !== null &&
  "errors" in e &&
  Array.isArray((e as SignInError).errors);
