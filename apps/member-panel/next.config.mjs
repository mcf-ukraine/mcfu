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
    outputFileTracingExcludes: {
      "*": [
        "./**/node_modules/@swc/core-linux-x64-gnu",
        "./**/node_modules/@swc/core-linux-x64-musl",
        "./**/node_modules/esbuild/linux",
        "./**/node_modules/webpack",
        "./**/node_modules/rollup",
        "./**/node_modules/terser",
      ],
    },
  },
  outputFileTracing: true,
};

export default withNx(withAxiom(nextConfig));
