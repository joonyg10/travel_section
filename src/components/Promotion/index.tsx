import { Image } from "../";

import { Container, Item } from "./styles";

function Promotion() {
  return (
    <Container>
      <Item>
        <Image src="./assets/triple@2x.png" alt="main" />
        <p>2019년 2월 기준</p>
      </Item>
      <Item>
        <p>Hello wrold</p>
      </Item>
    </Container>
  );
}

export default Promotion;
