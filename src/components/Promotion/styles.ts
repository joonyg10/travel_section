import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  max-width: 1200px;
  margin-inline: auto;
  column-gap: 5em;
`;

const Item = styled.div``;

export { Container, Item };
