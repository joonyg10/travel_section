import { Container } from "./styles";

interface StatisticProps {
  status: number;
  children: React.ReactNode;
}

function Statistic({ status, children }: StatisticProps) {
  return (
    <Container>
      <span>{status}</span>
      {children}
    </Container>
  );
}

export default Statistic;
