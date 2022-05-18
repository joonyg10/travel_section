import { useState, useCallback } from "react";

import useAnimation from "../../hooks/useAnimation";

import { Container, AnimatedCount, BoldText } from "./styles";

interface StatisticProps {
  status: number;
  user?: boolean;
  children: React.ReactNode;
}

function Statistic({ status, user, children }: StatisticProps) {
  const [counter, setCounter] = useState<number>(status);

  const onAnimate = useCallback(
    (progress: number) => {
      setCounter(() => status * (1 - Math.pow(1 - progress, 3)));
    },
    [status]
  );
  useAnimation({ onAnimate });

  return (
    <Container>
      <AnimatedCount counterSize={`${status}`.length}>
        {Math.round(counter)}
      </AnimatedCount>
      <BoldText>만 {user ? "명" : "개"}</BoldText>
      <span>의 {children}</span>
    </Container>
  );
}

export default Statistic;
