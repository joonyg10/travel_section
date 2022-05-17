import { Container } from "./styles";

interface FadeInProps {
  delay?: number;
  children: React.ReactNode;
}

function FadeIn({ delay, children }: FadeInProps) {
  return <Container delay={delay}>{children}</Container>;
}

export default FadeIn;
