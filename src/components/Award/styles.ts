import styled from "styled-components";

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex()};

  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const Item = styled.div``;

export { Container, Item };
