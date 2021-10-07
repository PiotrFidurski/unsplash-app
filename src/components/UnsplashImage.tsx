import Image from "react-bootstrap/Image";
import { UnsplashImage } from "../features/images/imagesSlice";

interface Props {
  image: UnsplashImage;
}

export function ImageComponent({ image }: Props) {
  return (
    <div className="col-md-4 mb-2">
      <Image
        style={{
          width: "100%",
          maxHeight: "200px",
          minHeight: "200px",
          objectFit: "cover",
        }}
        thumbnail
        src={image.urls.small}
        alt={image.alt_description}
        rounded
        fluid
      />
    </div>
  );
}
