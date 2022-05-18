import styled, { keyframes } from "styled-components";

const boxFadeIn = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div<{ delay?: number }>`
  animation: ${boxFadeIn} 700ms ease-in;
  animation-delay: ${({ delay }) => `${(delay ?? 0) * 100}ms`};
`;

export { Container };
