import React from "react";
import LighthouseFab from "../react-google-lighthouse-fab/LighthouseFab";

export default {
  title: "components/LighthouseFab",
  component: LighthouseFab,
  argTypes: {},
};

const Template = (args) => <LighthouseFab {...args} />;

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

export const GistLiveScoreGood = Template.bind({});
GistLiveScoreGood.args = {
  gistId: "b83774d588570b936751fc2caddf2b33",
  size: "large",
  borderStyle: "solid",
  orientation: "right",
  label: "LighthouseFab",
};

export const GistLiveScoreBad = Template.bind({});
GistLiveScoreBad.args = {
  gistId: "ff2970b0d3d4ce55eefbd27370d613f2",
  size: "large",
  borderStyle: "solid",
  orientation: "right",
  label: "LighthouseFab",
};

export const ShowTokenBarBad = Template.bind({});
ShowTokenBarBad.args = {
  showScoreTokens: true,
  gistId: "ff2970b0d3d4ce55eefbd27370d613f2",
  size: "large",
  borderStyle: "solid",
  orientation: "right",
  label: "LighthouseFab",
};

export const ShowTokenBarGood = Template.bind({});
ShowTokenBarGood.args = {
  showScoreTokens: true,
  gistId: "b83774d588570b936751fc2caddf2b33",
  size: "large",
  borderStyle: "solid",
  orientation: "right",
  label: "LighthouseFab",
};
