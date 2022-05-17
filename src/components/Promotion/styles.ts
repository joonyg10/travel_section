import styled, { AlignProps, JustifyProps, keyframes } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 7em;

  width: 1200px;
  margin-inline: 9rem;
`;

const boxFadeIn = keyframes`
  from {
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface ItemProps {
  flex?: boolean;
  justify?: JustifyProps;
  align?: AlignProps;
  flexRow?: boolean;
  delayOrder?: number;
}

const Item = styled.div<ItemProps>`
  position: relative;
  ${({ theme, flex, justify, align = "stretch" }) =>
    flex && theme.mixin.flex(justify, align)};
  flex-direction: ${({ flexRow }) => (flexRow ? "column" : "row")};
  justify-self: end;
`;

const FadeInItem = styled(Item)`
  opacity: 0;
  animation: ${boxFadeIn} 700ms ease-in forwards;
  animation-delay: ${({ delayOrder }) => `${(delayOrder ?? 0) * 100}ms`};
`;

export { Container, Item, FadeInItem };
