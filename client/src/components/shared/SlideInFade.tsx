import * as React from "react";
import { Fade, GetComponentProps } from "@nickjmorrow/react-component-library";

export const SlideInFade: React.FC<
  { enterTimeout: number } & GetComponentProps<typeof Fade>
> = ({ children, enterTimeout, ...props }) => {
  return (
    <Fade
      in={true}
      appear={true}
      enterTimeout={enterTimeout}
      styleKeys={["top"]}
      unmounted={{ top: "-20px" }}
      mounted={{ top: "0px" }}
      style={{ position: "relative" }}
      {...props}
    >
      {children}
    </Fade>
  );
};
