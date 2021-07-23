import React from "react";
import LighthouseFab from "../react-google-lighthouse-fab/LighthouseFab";

export default {
  title: "components/LighthouseFab",
  component: LighthouseFab,
  argTypes: {
    reportSrc: "",
  },
};

const Template = (args) => <LighthouseFab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "LighthouseFab",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "LighthouseFab",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  reportSrc: "",
  label: "LighthouseFab",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  reportSrc: "",
  label: "LighthouseFab",
};
