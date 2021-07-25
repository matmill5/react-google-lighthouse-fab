// Lighthouse Fab's Props
// Extends Base Div Component
// Most Props are Optional
export interface LighthouseFabContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium" | "large";
  orientation?: "left" | "right";
  borderStyle?: "solid" | "dashed" | "dotted";
  score?: number;
}

export interface ScoreTokenProps extends React.HTMLAttributes<HTMLDivElement> {
  score?: number;
}

export interface ScoreTokenBarContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  visible?: boolean;
}

export interface LighthouseFabProps extends LighthouseFabContainerProps {
  gistId: string; // gist id
  showScoreTokens?: boolean;
}
