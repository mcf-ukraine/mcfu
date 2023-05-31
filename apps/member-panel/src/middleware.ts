import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs/server";
import { publicPages } from "./constants/publicPages";

export default authMiddleware({
  afterAuth(auth, request) {
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL("/login", request.url);
      signInUrl.searchParams.set("redirect_url", request.url);

      return NextResponse.redirect(signInUrl);
    }
  },

  publicRoutes: publicPages,
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
    "/(api|trpc)(.*)",
  ],
  runtime: "experimental-edge",
};
