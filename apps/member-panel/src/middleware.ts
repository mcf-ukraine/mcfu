import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { publicPages } from "./constants/publicPages";

const isPublic = (path: string) =>
  publicPages.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );

export default withClerkMiddleware((request: NextRequest) => {
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // if the user is not signed in redirect them to the sign in page.
  const { userId } = getAuth(request);

  if (!userId) {
    // redirect the users to /pages/login/[[...index]].ts
    const signInUrl = new URL("/login", request.url);
    signInUrl.searchParams.set("redirect_url", request.url);

    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

// Stop Middleware running on static files and public folder
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
};
