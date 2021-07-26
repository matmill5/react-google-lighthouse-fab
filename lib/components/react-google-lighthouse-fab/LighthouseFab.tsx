import React, { FC, useEffect } from "react";
import {
  LighthouseFabContainerProps,
  LighthouseFabProps,
  LighthouseScoresType,
  ScoreTokenBarContainerProps,
  ScoreTokenProps,
} from "./types";
import styled from "styled-components";
import GoogleLighthouseIconSvg from "../../assets/svg/lighthouse-logo.svg";
import {
  handleScoreColor,
  handleBorderStyle,
  handleSizeType,
  parseLighthouseReportForScores,
  getLighthouseReport,
} from "../../utils/utils";
import { LighthouseViewerBaseUrl } from "../../constants/constants";

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

const ScoreToken = styled.div<ScoreTokenProps>`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  padding: 3px;
  border: 2px solid;
  border-color: ${(props) => handleScoreColor(props.score)};}
  width: 10px;
  height: 10px;
  margin: 3px;
  display: table-cell;
`;

const ScoreTokenText = styled.p`
  padding: 0px;
  font-size: 9px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;

const ScoreTokenBarContainer = styled.div<ScoreTokenBarContainerProps>`
  display: flex;
  justify-content: space-evenly;
  margin-top: 7px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};}
`;

const LighthouseFab: FC<LighthouseFabProps> = ({ ...props }) => {
  const [
    lighthouseScores,
    setLighthouseScores,
  ] = React.useState<LighthouseScoresType>({
    performance: 100,
    accessibility: 100,
    "best-practices": 100,
    seo: 100,
    pwa: 100,
  });

  // Get Lighthouse Report on component load
  useEffect(() => {
    console.log("Lighthouse Fab: Loading Lighthouse Report");
    getLighthouseReport(props.gistId)
      .then((lighthouseReport) => {
        console.log(lighthouseReport);
        setLighthouseScores(parseLighthouseReportForScores(lighthouseReport));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.gistId]);

  return (
    <LighthouseFabContainer
      {...props}
      score={
        props.score !== undefined ? props.score : lighthouseScores.performance
      }
    >
      <LighthouseFabAnchor
        href={LighthouseViewerBaseUrl + props.gistId}
        target="_blank"
      >
        <LighthouseFabIcon src={GoogleLighthouseIconSvg}></LighthouseFabIcon>
      </LighthouseFabAnchor>
      <ScoreTokenBarContainer visible={props.showScoreTokens}>
        {Object.values(lighthouseScores).map((score) => {
          return (
            <ScoreToken score={score}>
              <ScoreTokenText>{score}</ScoreTokenText>
            </ScoreToken>
          );
        })}
      </ScoreTokenBarContainer>
    </LighthouseFabContainer>
  );
};

// Default props
LighthouseFabContainer.defaultProps = {
  size: "medium",
  orientation: "right",
  borderStyle: "solid",
};

export default LighthouseFab;
