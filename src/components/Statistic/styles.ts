import styled from "styled-components";

const Container = styled.p`
  font-size: 3rem;

  & + & {
    margin-block: 1.375rem;
  }
`;

const AnimatedCount = styled.strong<{ counterSize: number }>`
  display: inline-block;
  min-width: ${({ counterSize }) => `${1.875 * counterSize}rem`};
  margin-right: -0.375rem;
  font-weight: bold;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export { Container, AnimatedCount, BoldText };
