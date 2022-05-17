import { useState } from "react";

import useAnimation from "../../hooks/useAnimation";

import { Container } from "./styles";

interface StatisticProps {
  status: number;
  children: React.ReactNode;
}

function Statistic({ status, children }: StatisticProps) {
  const [counter, setCounter] = useState<number>(status);

  const onAnimate = (progress: number) => {
    setCounter(() => status * (1 - Math.pow(1 - progress, 3)));
  };
  useAnimation({ onAnimate });

  return (
    <Container>
      <span>{Math.round(counter)}</span>
      {children}
    </Container>
  );
}

export default Statistic;
