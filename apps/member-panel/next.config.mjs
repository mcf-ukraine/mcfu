// @ts-check
!process.env.SKIP_ENV_VALIDATION && (await import("./env.mjs"));
import { withNx } from "@nrwl/next/plugins/with-nx.js";

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

export default withNx(nextConfig);
