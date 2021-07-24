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

export interface LighthouseFabProps extends LighthouseFabContainerProps {
  gistId: string; // gist id
}
