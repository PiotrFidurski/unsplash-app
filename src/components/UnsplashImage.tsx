import { Card } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { UnsplashImage } from "../features/images/imagesSlice";
import { addImageToSelected } from "../features/selectedImages/selectedImagesSlice";

interface Props {
  image: UnsplashImage;
}

export function ImageComponent({ image }: Props) {
  const selectedImages = useAppSelector(
    (state) => state.selectedImages.selectedImages
  );

  const dispatch = useAppDispatch();

  function selectImage(e: React.BaseSyntheticEvent) {
    e.stopPropagation();
    dispatch(addImageToSelected(image));
  }

  return (
    <div className="col-md-4 mb-2 mr-2">
      <Card
        onClick={selectImage}
        style={
          selectedImages.includes(image)
            ? {
                border: "2px solid #0d6efd",
                cursor: "pointer",
                boxSizing: "border-box",
              }
            : { cursor: "pointer", boxSizing: "border-box" }
        }
      >
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
          <Card.Title>{image.alt_description}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
