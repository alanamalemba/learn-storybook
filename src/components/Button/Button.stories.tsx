import { Meta, StoryFn } from "@storybook/react";
import Center from "../Center/Center";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button",
  },
  decorators: [(story) => <Center>{story()}</Center>],
} as Meta<typeof Button>;

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

// V6 using Template
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  variant: "primary",
};

export const SecondaryA = Template.bind({});

SecondaryA.args = {
  variant: "secondary",
};
