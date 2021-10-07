import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Folder } from "../features/folder/foldersSlice";
import { ImageComponent } from "./UnsplashImage";

interface Props {}

export const SelectedFolder: React.FC<Props> = () => {
  const { name } = useParams<{ name: string }>();

  const state = useAppSelector((state) => state.folders.folders);

  const storedFolder =
    (JSON.parse(localStorage.getItem("folders")!) as Folder[]) || state;

  const folder = storedFolder.find((folder) => folder.name === name);

  if (!folder) return <div>Couldn't load requested folder</div>;

  return (
    <Col>
      {folder.name}
      <Row className="mt-3">
        {folder.images.map((image) => (
          <ImageComponent image={image} key={image.id} />
        ))}
      </Row>
    </Col>
  );
};
