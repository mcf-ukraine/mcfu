import { withThemeByClassName } from "@storybook/addon-styling";
import { type Parameters, type Decorator } from "@storybook/react";
import "./tailwind-imports.css";
import "./styles.css";

export const decorators: Decorator[] = [
  withThemeByClassName({
    themes: {
      light: "",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

export const parameters: Parameters = {
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "#ffffff" },
      { name: "dark", value: "#0f172a" },
    ],
  },
};
