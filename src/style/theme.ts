import { css, DefaultTheme, JustifyProps, AlignProps } from "styled-components";

export const theme: DefaultTheme = {
  mixin: {
    flex: (
      justify: JustifyProps = "flex-start",
      align: AlignProps = "center"
    ) => css`
      display: flex;
      justify-content: ${justify};
      align-items: ${align};
      gap: 1em;
    `,
  },
};
