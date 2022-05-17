import { Image } from "../";

import { Container, Item } from "./styles";

interface AwardProps {
  src: string;
  store: string;
  award: string;
}

function Award({ src, store, award }: AwardProps) {
  return (
    <Container>
      <Image src={src} alt="app store logo" />
      <Item>
        <p>{store}</p>
        <p>{award}</p>
      </Item>
    </Container>
  );
}

export default Award;
