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
      styleKeys={["margin-top"]}
      unmounted={{ marginTop: "-20px" }}
      mounted={{ marginTop: "0px" }}
      {...props}
    >
      {children}
    </Fade>
  );
};
