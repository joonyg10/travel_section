import { Container } from "./styles";

interface BoxProps {
  children: React.ReactNode;
}

function Box({ children, ...restProps }: BoxProps) {
  return <Container {...restProps}>{children}</Container>;
}

export default Box;
