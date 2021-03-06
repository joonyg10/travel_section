import styled, { AlignProps, JustifyProps } from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
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
  transform: translateY(-3rem);
`;

export { Container, Typography, Stack };
