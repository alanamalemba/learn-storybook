import { Meta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
} as Meta;

export const Default = () => <Input variant="default" />;
export const Small = () => <Input variant="small" />;
export const Large = () => <Input variant="large" />;

Small.storyName = "Small Input"; // able to rename the variant component
