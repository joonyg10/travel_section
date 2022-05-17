import { Image, Statistic, Award, FadeIn } from "../";

import { Container, Stack, Typography } from "./styles";

function Promotion() {
  return (
    <Container>
      <FadeIn>
        <Image src="./assets/triple@2x.png" alt="main award" />
        <Typography>2019년 2월 기준</Typography>
      </FadeIn>
      <Stack direction="column" justify="space-around" align="flex-start">
        <FadeIn delay={1}>
          <Statistic status={350} user>
            사용자
          </Statistic>
          <Statistic status={21}>리뷰</Statistic>
          <Statistic status={650}>저장</Statistic>
        </FadeIn>
        <FadeIn delay={2}>
          <Stack>
            <Award
              src="./assets/play-store@2x.png"
              store="2018 구글 플레이스토어"
              award="올해의 앱 최우수상 수상"
            />
            <Award
              src="./assets/badge-apple@4x.png"
              store="2018 애플 앱스토어"
              award="오늘의 여행앱 선정"
            />
          </Stack>
        </FadeIn>
      </Stack>
    </Container>
  );
}

export default Promotion;
