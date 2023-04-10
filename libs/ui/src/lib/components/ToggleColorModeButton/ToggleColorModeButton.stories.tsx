import type { Meta } from "@storybook/react";
import { ToggleColorModeButton } from "./ToggleColorModeButton";

const Story: Meta<typeof ToggleColorModeButton> = {
  component: ToggleColorModeButton,
  title: "ToggleColorModeButton",
};
export default Story;

export const Primary = {
  args: {},
};
