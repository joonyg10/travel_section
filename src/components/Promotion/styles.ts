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

const Typography = styled.p`
  font-size: 1.25rem;
  text-align: center;
`;

export { Container, Typography };
