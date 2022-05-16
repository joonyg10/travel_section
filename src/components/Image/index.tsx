import { ImageStyle } from "./styles";

interface ImageProps {
  src: string;
  alt: string;
}

function Image({ src, alt }: ImageProps) {
  return <ImageStyle src={src} alt={alt} />;
}

export default Image;
