import { ImageStyle } from "./styles";

interface ImageProps {
  src: string;
  alt: string;
  size?: number;
}

function Image({ src, alt, size }: ImageProps) {
  return <ImageStyle src={src} alt={alt} size={size} />;
}

export default Image;
