import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MagicLinkErrorCode, isMagicLinkError, useClerk } from "@clerk/nextjs";
import { Spinner } from "@mcfu/ui";
import { ua } from "../locales/ua";
import logo from "../public/logo-transparent.png";
import { getBaseUrl } from "../utils/getBaseUrl";
import { withHomeRedirect } from "../utils/withHomeRedirect";

const BASE_URL = getBaseUrl();

export const getServerSideProps = withHomeRedirect;

const VerifyEmail = () => {
  const [verificationStatus, setVerificationStatus] = useState("loading");
  const { handleMagicLinkVerification } = useClerk();

  useEffect(() => {
    async function verify() {
      try {
        await handleMagicLinkVerification({
          redirectUrl: `${BASE_URL}/login`,
          redirectUrlComplete: BASE_URL,
        });
        // If we're not redirected at this point, it means
        // that the flow has completed on another device.
        setVerificationStatus("verified");
      } catch (err) {
        // Verification has failed.
        let status = "failed";
        if (isMagicLinkError(err) && err.code === MagicLinkErrorCode.Expired) {
          status = "expired";
        }
        setVerificationStatus(status);
      }
    }

    verify();
  }, [handleMagicLinkVerification]);

  return (
    <>
      <Head>
        <title>{ua.pages.verifyEmail.titleTag}</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center text-sm">
        <Image
          className="mx-auto h-24 w-auto"
          width={96}
          height={96}
          src={logo}
          alt={ua.common.logoAlt}
        />
        {verificationStatus === "loading" ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div className="mt-8">
            {verificationStatus === "failed" && (
              <>
                <p>{ua.pages.verifyEmail.content.verificationFailed}</p>
                <p className="text-center">
                  <Link
                    className="text-base font-semibold leading-7 text-sky-600"
                    href={"/login"}
                  >
                    Увійти
                  </Link>
                </p>
              </>
            )}
            {verificationStatus === "expired" && (
              <>
                <p>{ua.pages.verifyEmail.content.verificationExpired}</p>
                <p className="text-center">
                  <Link
                    className="text-base font-semibold leading-7 text-sky-600"
                    href={"/login"}
                  >
                    Увійти
                  </Link>
                </p>
              </>
            )}
            {verificationStatus === "verified" &&
              ua.pages.verifyEmail.content.verificationSuccess}
          </div>
        )}
      </div>
    </>
  );
};

export default VerifyEmail;
