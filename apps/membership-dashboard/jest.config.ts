import type { Config } from "jest";

const config: Config = {
  displayName: "membership-dashboard",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nrwl/next/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/apps/membership-dashboard",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
