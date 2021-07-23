import React, { FC } from "react";
import { LighthouseFabProps } from "./types";
import styled from "styled-components";
import GoogleLighthouseIconSvg from "../../assets/svg/lighthouse-logo.svg";

const LighthouseFabContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 7px solid rgba(12, 206, 107, 0);
  :hover {
    transition: border 0.5s;
    border: 7px solid rgba(12, 206, 107, 1);
  }
`;

const LighthouseFabIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  padding: 0px;
`;

const LighthouseViewerBaseUrl =
  "https://googlechrome.github.io/lighthouse/viewer/";

const LighthouseFab: FC<LighthouseFabProps> = ({ ...props }) => {
  return (
    <LighthouseFabContainer>
      <LighthouseFabIcon src={GoogleLighthouseIconSvg}></LighthouseFabIcon>
    </LighthouseFabContainer>
  );
};

export default LighthouseFab;
