import * as React from "react";
import { Transition } from "react-transition-group";
import { Theme } from "modules/theming";
import { useTheme } from "modules/theming/useTheme";

export const Fade: React.SFC<{
  in: boolean;
  style?: React.CSSProperties;
  styleKeys?: any[];
  mounted?: React.CSSProperties;
  unmounted?: React.CSSProperties;
  enterTimeout?: number;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}> = ({
  children,
  in: inProp,
  style,
  styleKeys = [],
  unmounted: customUnmounted = {},
  mounted: customMounted = {},
  enterTimeout = 200,
  mountOnEnter = true,
  unmountOnExit = false,
  ...props
}) => {
  const defaultMounted = { opacity: 1 };
  const defaultUnmounted = { opacity: 0 };
  const mounted = { ...defaultMounted, ...customMounted };
  const unmounted = { ...defaultUnmounted, ...customUnmounted };

  const transitionStyles = {
    entering: unmounted,
    entered: mounted,
    exiting: unmounted,
    exited: unmounted
  };

  const duration = 200;
  const transitionInfo = "200ms cubic-bezier(0.645, 0.045, 0.355, 1.000)";

  const styleKeysWithOpacity = ["opacity", ...styleKeys];
  const transition = styleKeysWithOpacity
    .map(sk => `${sk} ${transitionInfo}`)
    .join(", ");

  const defaultStyle = {
    transition,
    width: "inherit",
    opacity: 0,
    ...style
  };

  const timeout = { enter: enterTimeout, exit: duration };

  return (
    <Transition
      in={inProp}
      appear={true}
      timeout={timeout}
      unmountOnExit={unmountOnExit}
      mountOnEnter={mountOnEnter}
      {...props}
    >
      {state => {
        return (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
            {children}
          </div>
        );
      }}
    </Transition>
  );
};
