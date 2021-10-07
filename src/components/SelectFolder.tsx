import * as React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addImages } from "../features/folder/foldersSlice";
import { resetSelectedImages } from "../features/selectedImages/selectedImagesSlice";

interface Props {}

export const SelectFolder: React.FC<Props> = () => {
  const [selected, setSelected] = React.useState("");

  const folders = useAppSelector((state) => state.folders.folders);

  const selectedImages = useAppSelector(
    (state) => state.selectedImages.selectedImages
  );

  const dispatch = useAppDispatch();

  function pushToFolder() {
    if (selected) {
      dispatch(addImages({ name: selected, images: selectedImages }));
      dispatch(resetSelectedImages());
    }
  }

  return (
    <Row className="mt-2">
      <Col sm={4}>
        <select
          className="form-select"
          aria-label="select-folder"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option defaultValue="default">select folder</option>
          {folders.map((folder) => (
            <option key={folder.name} value={folder.name}>
              {folder.name}
            </option>
          ))}
        </select>
      </Col>
      <Col>
        <Button
          disabled={
            selected === "" ||
            selected === "select folder" ||
            selectedImages.length === 0
          }
          onClick={pushToFolder}
        >
          Add to folder
        </Button>
      </Col>
    </Row>
  );
};
