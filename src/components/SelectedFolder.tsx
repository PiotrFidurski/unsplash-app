import * as React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { useHistory, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { remove, removeImages } from "../features/folder/foldersSlice";
import { resetSelectedImages } from "../features/selectedImages/selectedImagesSlice";
import { ImageComponent } from "./UnsplashImage";

interface Props {}

export const SelectedFolder: React.FC<Props> = () => {
  const { name } = useParams<{ name: string }>();

  const { push } = useHistory();

  const dispatch = useAppDispatch();

  const folders = useAppSelector((state) => state.folders.folders);

  const selectedImages = useAppSelector(
    (state) => state.selectedImages.selectedImages
  );

  const folder = folders.find((folder) => folder.name === name);

  function handleRemoveSelected() {
    dispatch(removeImages({ name, images: selectedImages }));
    dispatch(resetSelectedImages());
  }

  function handleRemoveFolder() {
    dispatch(remove(folder?.name));
    push("/");
  }

  if (!folder) return <div>Couldn't load requested folder</div>;

  return (
    <Col>
      <Row className="mt-2 align-items-center justify-content-between">
        <Col sm={4} className="">
          <Row>
            <Col>
              <h2 className="wrapElipsis">{folder.name}</h2>
            </Col>
            <Col>
              <Button
                variant="danger"
                style={{ marginTop: "0" }}
                onClick={handleRemoveFolder}
              >
                <BsTrash />
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            onClick={handleRemoveSelected}
            disabled={selectedImages.length === 0}
            variant="danger"
          >
            Remove selected
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        {folder.images.map((image) => (
          <ImageComponent image={image} key={image.id} />
        ))}
      </Row>
    </Col>
  );
};
