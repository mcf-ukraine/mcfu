import { useRouter } from "next/router";
import { useEffect, type FC, type PropsWithChildren } from "react";
import { useUser } from "@clerk/nextjs";

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/login");
    }
  }, [isLoaded, isSignedIn, router]);

  return <>{children}</>;
};
