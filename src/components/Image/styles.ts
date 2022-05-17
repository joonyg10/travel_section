import styled from "styled-components";

const ImageStyle = styled.img<{ size?: number }>`
  display: block;
  max-width: 100%;
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};

  object-fit: cover;
`;

export { ImageStyle };
