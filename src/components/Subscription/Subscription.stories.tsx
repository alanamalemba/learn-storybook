import { Meta } from "@storybook/react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

export default {
  title: "form/Subscription",
} as Meta;

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
);
