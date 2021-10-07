import * as React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { create } from "../features/folder/foldersSlice";
import { close } from "../features/modal/modalSlice";

export function NewFolderModal() {
  const open = useAppSelector((state) => state.modal.open);

  const [name, setName] = React.useState("");

  const dispatch = useAppDispatch();

  function handleSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    dispatch(create({ name, images: [] }));
    setName("");
    dispatch(close());
  }

  function handleClose() {
    dispatch(close());
  }

  return (
    <Modal show={open} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Create new folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="folderName">Folder name: </Form.Label>
            <Form.Control
              id="folderName"
              type="query"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new folder name"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
