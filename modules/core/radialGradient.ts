import styled, { css } from "styled-components";

export const radialGradient = css`
  background: radial-gradient(
        circle at top left,
        hsla(334, 100%, 50%, 0.4) 10%,
        transparent 80%
      )
      100% 100%/200% 200%,
    radial-gradient(circle at bottom left, #6a00ff 30%, transparent 80%) 100%
      100%/200% 200%,
    radial-gradient(
        circle at top right,
        hsla(232, 90%, 61%, 0.7) 30%,
        transparent 60%
      )
      100% 100%/200% 200%,
    radial-gradient(
        circle at 75% 75%,
        hsla(155, 90%, 61%, 0.7) 10%,
        transparent 60%
      )
      100% 100%/200% 200%,
    radial-gradient(circle at 50% 50%, #ffd900 70%, transparent 100%) 100% 100%/200%
      200%;
`;
