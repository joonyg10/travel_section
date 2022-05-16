import styled, { JustifyProps } from "styled-components";

interface StackStyleProps {
  justify?: JustifyProps;
  spacing?: number;
}

const Container = styled.div<StackStyleProps>`
  ${({ theme, justify }) => theme.mixin.flex(justify)};
  gap: ${({ spacing }) => `${spacing}em`};
`;

export { Container };
