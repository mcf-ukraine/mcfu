import type { Meta, StoryObj } from "@storybook/react";
import { InfoBox } from "./InfoBox";

const meta: Meta<typeof InfoBox> = {
  title: "InfoBox",
  component: InfoBox,
};

export default meta;
type Story = StoryObj<typeof InfoBox>;

export const Primary: Story = {
  render: () => <InfoBox content="Anything you like to pass here" />,
};
