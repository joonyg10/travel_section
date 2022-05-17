import styled, { AlignProps, JustifyProps } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  column-gap: 10em;
  width: 1200px;
  margin-inline: auto;
`;

interface ItemProps {
  justify?: JustifyProps;
  align?: AlignProps;
  direction?: "row" | "column";
}

const Stack = styled.div<ItemProps>`
  ${({ theme, justify, align }) => theme.mixin.flex(justify, align)};
  flex-direction: ${({ direction = "row" }) => direction};

  justify-self: end;
  align-self: flex-start;
`;

const Typography = styled.p`
  font-size: 1.25rem;
  text-align: center;
`;

export { Container, Typography, Stack };
