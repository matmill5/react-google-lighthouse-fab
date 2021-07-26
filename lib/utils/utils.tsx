import { LighthouseScoresType } from "../components/react-google-lighthouse-fab/types";
import { LighthouseFabGistBaseUrl } from "../constants/constants";

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
    //@ts-ignore
    JSON.parse(Object.values(lighthouseReport.files)[0].content).categories
  )) {
    //@ts-ignore
    scores[key] = value.score * 100;
  }
  return scores;
};

export {
  handleScoreColor,
  handleSizeType,
  handleBorderStyle,
  getLighthouseReport,
  parseLighthouseReportForScores,
};
