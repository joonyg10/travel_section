import { Image, Statistic } from "../";

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
      </Item>
    </Container>
  );
}

export default Promotion;
