import type { Config } from "jest";

const esModules = ["env.mjs", "zod"];

const config: Config = {
  displayName: "member-panel",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[mtj]sx?$": ["babel-jest", { presets: ["@nrwl/next/babel"] }],
  },
  transformIgnorePatterns: [
    `node_modules/(?!.*\\.mjs$|${esModules.join("|")})`,
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/apps/member-panel",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
