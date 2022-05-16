import styled from "styled-components";

const Container = styled.p`
  font-size: 3rem;

  & + & {
    margin-block: 1rem;
  }
`;

export { Container };
