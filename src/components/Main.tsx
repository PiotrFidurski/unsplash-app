import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import { SearchBar } from "./SearchBar";
import { SelectFolder } from "./SelectFolder";
import { ImageComponent } from "./UnsplashImage";

export function Main() {
  const photos = useAppSelector((state) => state.images.images);
  const folders = useAppSelector((state) => state.folders.folders);
  React.useEffect(() => {
    localStorage.setItem("folders", JSON.stringify({ folders }));
  }, [folders]);

  return (
    <Col>
      <SearchBar />
      <SelectFolder />
      <Row className="mt-3">
        {photos.map((image) => (
          <ImageComponent image={image} key={image.id} />
        ))}
      </Row>
    </Col>
  );
}
