import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Button</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Button</Button>,
};

export const Soft: Story = {
  render: () => <Button variant="soft">Button</Button>,
};

export const Block: Story = {
  render: () => (
    <div
      style={{
        width: "480px",
        padding: "1rem 1rem 4rem",
        border: "1px solid #ccc",
        borderRadius: 4,
      }}
    >
      <p className="mb-4 text-sm dark:text-white">480px width container</p>
      <Button block>Button</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Button disabled>Button</Button>,
};
