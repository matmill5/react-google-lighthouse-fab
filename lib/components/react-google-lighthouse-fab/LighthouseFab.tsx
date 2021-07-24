import React, { FC } from "react";
import { LighthouseFabContainerProps, LighthouseFabProps } from "./types";
import styled from "styled-components";
import GoogleLighthouseIconSvg from "../../assets/svg/lighthouse-logo.svg";

// Handle Fab's Size
const handleSizeType = (size) => {
  switch (size) {
    case "small":
      return "50px";
    case "medium":
      return "75px";
    case "large":
      return "100px";
  }
};

// Handle Fab's Border Style
const handleBorderStyle = (borderStyle) => {
  switch (borderStyle) {
    case "solid":
      return "5px solid rgba(12, 206, 107, 1)";
    case "dashed":
      return "5px dashed rgba(12, 206, 107, 1)";
    case "dotted":
      return "5px dotted rgba(12, 206, 107, 1)";
  }
};

const handleScoreColor = (score) => {
  if (score >= 90) {
    return "rgba(12, 206, 107, 1) !important";
  } else if (score >= 50 && score < 90) {
    return "rgb(245,158,38,1) !important";
  } else if (score < 50) {
    return "rgba(245,77,71,1) !important";
  }
};

// Lighthouse Fab Parent Container
const LighthouseFabContainer = styled.div<LighthouseFabContainerProps>`
  position: fixed;
  bottom: 50px;
  right: ${(props) => (props.orientation === "right" ? "50px" : "auto")};
  left: ${(props) => (props.orientation === "left" ? "50px" : "auto")};
  width: ${(props) => handleSizeType(props.size)};
  height: ${(props) => handleSizeType(props.size)};
  border-radius: 50%;
  border: 5px solid rgba(12, 206, 107, 0);
  :hover {
    transition: border 0.5s;
    border: ${(props) => handleBorderStyle(props.borderStyle)};
    border-color: ${(props) => handleScoreColor(props.score)};
  }
`;

// Default props
LighthouseFabContainer.defaultProps = {
  size: "medium",
  orientation: "right",
  borderStyle: "solid",
};

const LighthouseFabIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  padding: 0px;
`;

const LighthouseFabAnchor = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  padding: 0px;
`;

const LighthouseViewerBaseUrl =
  "https://googlechrome.github.io/lighthouse/viewer/?gist=";

const LighthouseFab: FC<LighthouseFabProps> = ({ ...props }) => {
  return (
    <LighthouseFabContainer {...props}>
      <LighthouseFabAnchor
        href={LighthouseViewerBaseUrl + props.gist}
        target="_blank"
      >
        <LighthouseFabIcon src={GoogleLighthouseIconSvg}></LighthouseFabIcon>
      </LighthouseFabAnchor>
    </LighthouseFabContainer>
  );
};

export default LighthouseFab;
