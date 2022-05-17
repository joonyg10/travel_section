import styled from "styled-components";

const Container = styled.p`
  font-size: 3rem;

  & + & {
    margin-block: 1.375rem;
  }
`;

const AnimatedCount = styled.strong<{ textLength: number }>`
  display: inline-block;
  min-width: ${({ textLength }) => `${1.875 * textLength}rem`};
  margin-right: -0.375rem;
  font-weight: bold;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export { Container, AnimatedCount, BoldText };
