import { Button, Card } from "react-bootstrap";
import { UnsplashImage } from "../features/images/imagesSlice";

interface Props {
  image: UnsplashImage;
}

export function ImageComponent({ image }: Props) {
  return (
    <div className="col-md-4 mb-2">
      <Card>
        <Card.Img
          style={{
            width: "100%",
            maxHeight: "200px",
            minHeight: "200px",
            objectFit: "cover",
          }}
          src={image.urls.small}
          alt={image.alt_description}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
