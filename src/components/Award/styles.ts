import styled from "styled-components";

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  gap: 0.5em;

  font-size: 1.25rem;
  line-height: 1.4;

  & + & {
    margin-left: 0.675em;
  }
`;

const Item = styled.div``;

export { Container, Item };
