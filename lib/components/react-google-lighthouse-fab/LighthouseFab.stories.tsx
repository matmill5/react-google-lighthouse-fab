import React from "react";
import LighthouseFab from "../react-google-lighthouse-fab/LighthouseFab";

export default {
  title: "components/LighthouseFab",
  component: LighthouseFab,
  argTypes: {
    gist: "",
  },
};

const Template = (args) => (
  <LighthouseFab {...args} gist="b83774d588570b936751fc2caddf2b33" />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "LighthouseFab",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "LighthouseFab",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "LighthouseFab",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "LighthouseFab",
};

export const SolidHover = Template.bind({});
SolidHover.args = {
  size: "large",
  borderStyle: "solid",
  label: "LighthouseFab",
};

export const DottedHover = Template.bind({});
DottedHover.args = {
  size: "large",
  borderStyle: "dotted",
  label: "LighthouseFab",
};

export const DashedHover = Template.bind({});
DashedHover.args = {
  size: "large",
  borderStyle: "dashed",
  label: "LighthouseFab",
};

export const LeftHover = Template.bind({});
LeftHover.args = {
  size: "large",
  borderStyle: "solid",
  orientation: "left",
  label: "LighthouseFab",
};

export const GreenHover = Template.bind({});
GreenHover.args = {
  score: 91,
  size: "large",
  borderStyle: "solid",
  orientation: "right",
  label: "LighthouseFab",
};

export const OrangeHover = Template.bind({});
OrangeHover.args = {
  score: 80,
  size: "large",
  borderStyle: "solid",
  orientation: "right",
  label: "LighthouseFab",
};

export const RedHover = Template.bind({});
RedHover.args = {
  score: 48,
  size: "large",
  borderStyle: "solid",
  orientation: "right",
  label: "LighthouseFab",
};
