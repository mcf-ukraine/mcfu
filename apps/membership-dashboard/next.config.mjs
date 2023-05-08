// @ts-check
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));
import { withNx } from "@nx/next/plugins/with-nx.js";
import { withAxiom } from "next-axiom";

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    serverActions: false,
  },
};

export default withNx(withAxiom(nextConfig));
