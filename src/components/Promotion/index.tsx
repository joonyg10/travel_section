import { Image, Stack, Statistic, Award } from "../";

import { Container, Item } from "./styles";

function Promotion() {
  return (
    <Container>
      <Item>
        <Image src="./assets/triple@2x.png" alt="main" />
        <p>2019년 2월 기준</p>
      </Item>
      <Item>
        <Item>
          <Statistic status={350}>만명의 사용자</Statistic>
          <Statistic status={21}>만 개의 리뷰</Statistic>
          <Statistic status={650}>만 개의 저장</Statistic>
        </Item>
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
      </Item>
    </Container>
  );
}

export default Promotion;
