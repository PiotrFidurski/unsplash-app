import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import { SearchBar } from "./SearchBar";
import { SelectFolder } from "./SelectFolder";
import { ImageComponent } from "./UnsplashImage";

export function Main() {
  const photos = useAppSelector((state) => state.images.images);

  return (
    <Col className="mt-2">
      <SearchBar />
      <SelectFolder />
      <Row className="mt-2">
        {photos.map((image) => (
          <ImageComponent image={image} key={image.id} />
        ))}
      </Row>
    </Col>
  );
}
