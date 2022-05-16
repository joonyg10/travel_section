import styled from "styled-components";

const ImageStyle = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
`;

interface ImageProps {
  src: string;
  alt: string;
}

function Image({ src, alt }: ImageProps) {
  return <ImageStyle src={src} alt={alt} />;
}

export default Image;
