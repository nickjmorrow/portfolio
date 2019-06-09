import * as React from "react";
import { Typography, GetComponentProps } from "@nickjmorrow/react-component-library";

export const Header: React.FC<GetComponentProps<typeof Typography> & {style?: React.CSSProperties}> = ({ children, style,...props }) => {
  return <Typography styleVariant={1} weightVariant={7} style={{display: 'block', ...style}}{...props}>{children}</Typography>;
};
