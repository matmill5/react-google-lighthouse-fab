import React, { FC, useEffect } from "react";
import {
  LighthouseFabContainerProps,
  LighthouseFabProps,
  ScoreTokenBarContainerProps,
  ScoreTokenProps,
} from "./types";
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

const LighthouseViewerBaseUrl =
  "https://googlechrome.github.io/lighthouse/viewer/?gist=";

const LighthouseFabGistBaseUrl = "https://api.github.com/gists/";

const getLighthouseReport = async (gistId: string) => {
  const response = await fetch(LighthouseFabGistBaseUrl + gistId);
  return response.json();
};

// Parse out scores from Lighthouse Report
const parseLighthouseReportForScores = (lighthouseReport: any) => {
  let scores: LighthouseScoresType = {
    performance: 0,
    accessibility: 0,
    "best-practices": 0,
    pwa: 0,
    seo: 0,
  };
  for (const [key, value] of Object.entries(
    JSON.parse(Object.values(lighthouseReport.files)[0].content).categories
  )) {
    scores[key] = value.score * 100;
  }
  return scores;
};

interface LighthouseScoresType {
  performance: number;
  accessibility: number;
  "best-practices": number;
  seo: number;
  pwa: number;
}

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
