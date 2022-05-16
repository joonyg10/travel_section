import "styled-components";

declare module "styled-components" {
  type BaseFlexProps = "flex-start" | "flex-end" | "center";

  export type JustifyProps =
    | BaseFlexProps
    | ("space-around" | "space-between" | "space-evenly");

  export type AlignProps = BaseFlexProps | "stretch";

  export interface DefaultTheme {
    mixin: {
      flex: (
        justify: JustifyProps = "flex-start",
        align: AlignProps = "center"
      ) => FlattenSimpleInterpolation;
    };
  }
}
