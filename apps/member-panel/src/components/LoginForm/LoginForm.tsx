import Link from "next/link";
import { useRouter } from "next/router";
import { type FormEvent, useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { type OAuthStrategy } from "@clerk/nextjs/dist/types/server";
import { type SignInResource } from "@clerk/types/dist/signIn";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { log } from "next-axiom";
import { z } from "zod";
import { Button, InfoBox, Spinner, toast } from "@mcfu/ui";
import { env } from "../../env.mjs";
import { ua } from "../../locales/ua";
import { isSignInError } from "../../utils/clerk";
import { LoginFacebookButton } from "../LoginFacebookButton/LoginFacebookButton";
import { LoginGoogleButton } from "../LoginGoogleButton/LoginGoogleButton";

const emailSchema = z.string().email();

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [expired, setExpired] = useState(false);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const router = useRouter();
  const { signIn, isLoaded, setActive } = useSignIn();

  const signInWith = (strategy: OAuthStrategy) =>
    signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });

  const handleInvalid = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!emailSchema.safeParse(email).success) {
      toast.error({
        title: ua.pages.login.form.fields.email.errors.invalid.title,
        message: ua.pages.login.form.fields.email.errors.invalid.message,
      });
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setExpired(false);
    setVerified(false);

    if (isLoaded) {
      setLoading(true);

      const { startMagicLinkFlow, cancelMagicLinkFlow } =
        signIn.createMagicLinkFlow();

      let si: SignInResource;

      try {
        si = await signIn.create({ identifier: email });
        setLoading(false);
        setVerifying(true);
      } catch (e) {
        if (isSignInError(e)) {
          log.error(JSON.stringify(e.errors[0]));
          if (e.errors[0].code === "form_identifier_not_found") {
            toast.error({
              title: ua.pages.login.form.errors.emailNotFound.title,
              message: ua.pages.login.form.errors.emailNotFound.message,
            });
          } else {
            toast.error({
              title: ua.pages.login.form.errors.unknown.title,
              message: ua.pages.login.form.errors.unknown.message,
            });
          }
        } else {
          log.error(e);
          toast.error({
            title: ua.pages.login.form.errors.unknown.title,
            message: ua.pages.login.form.errors.unknown.message,
          });
        }
        setLoading(false);
        setVerifying(false);
        cancelMagicLinkFlow();
        return;
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { emailAddressId } = si.supportedFirstFactors.find(
        (ff) => ff.strategy === "email_link" && ff.safeIdentifier === email
      );

      startMagicLinkFlow({
        emailAddressId: emailAddressId,
        redirectUrl: `${env.NEXT_PUBLIC_SITE_URL}/verify-email`,
      });

      const verification = signIn.firstFactorVerification;

      if (verification.verifiedFromTheSameClient()) {
        setVerified(true);
      } else if (verification.status === "expired") {
        setExpired(true);
      }

      if (signIn.status === "complete") {
        setActive({ session: signIn.createdSessionId });
        router.push("/");
      }
    }
  };

  return (
    <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="rounded-md bg-white px-4 pb-8 pt-6 shadow dark:bg-slate-800 sm:rounded-lg sm:px-10 md:pb-10 md:pt-8">
        <div>
          <div>
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <LoginGoogleButton
                  onClick={() => {
                    signInWith("oauth_google");
                  }}
                />
              </div>
              <div>
                <LoginFacebookButton
                  onClick={() => {
                    signInWith("oauth_facebook");
                  }}
                />
              </div>
            </div>
          </div>

          <InfoBox content={ua.pages.login.form.content.socialLoginInfo} />

          <div className="relative mt-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500 dark:bg-slate-800 dark:text-gray-600">
                {ua.pages.login.form.content.or}
              </span>
            </div>
          </div>
        </div>
        <form className="mt-4 space-y-6" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="email"
              className="text-md block font-medium leading-6 text-gray-900 dark:text-white"
            >
              {ua.pages.login.form.fields.email.label}
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={ua.pages.login.form.fields.email.placeholder}
                onChange={(e) => setEmail(e.target.value)}
                required
                onInvalid={handleInvalid}
                className="text-md block w-full rounded-md border-0 border-gray-300 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:ring-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:leading-6"
              />
            </div>
          </div>

          <div>
            <Button type="submit" block textSize="md">
              {ua.pages.login.form.submit}
              {loading && (
                <Spinner
                  className="absolute left-[50%] top-[50%] ml-8 mt-[-11px]"
                  size={5}
                  darkColor="text-gray-200"
                />
              )}
            </Button>
          </div>

          {verifying && (
            <div className="rounded-md bg-blue-50 p-4 dark:bg-sky-900">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-blue-400 dark:text-sky-500"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-sky-700 dark:text-gray-100">
                    {verified
                      ? ua.pages.login.form.notifications.loginSuccess
                      : ua.pages.login.form.notifications.emailSent}
                    {expired &&
                      ua.pages.login.form.notifications.loginLinkExpired}
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>

      <p className="mt-5 text-center text-sm text-gray-500 dark:text-gray-400">
        {ua.pages.login.form.register.title}{" "}
        <Link
          href={"/register"}
          className="font-semibold leading-6 text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
        >
          {ua.pages.login.form.register.link}
        </Link>
      </p>
    </div>
  );
};
