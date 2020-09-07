import * as React from "react";
import { Fade } from "modules/core/Fade";
import { GetComponentProps } from "modules/core/GetComponentProps";

export const SlideInFade: React.FC<
  Omit<GetComponentProps<typeof Fade>, "in">
> = ({ children, ...props }) => {
  return (
    <Fade in={true} enterTimeout={500} {...props}>
      {children}
    </Fade>
  );
};
