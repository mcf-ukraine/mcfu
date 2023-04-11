import type { Config } from "jest";

const config: Config = {
  displayName: "member-panel",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[mtj]sx?$": ["babel-jest", { presets: ["@nrwl/next/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "mjs"],
  coverageDirectory: "../../coverage/apps/member-panel",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
