import { Button, Col, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { open } from "../features/modal/modalSlice";
import { Folder } from "./Folder";

export function SideBar() {
  const state = useAppSelector((state) => state.folders);

  const dispatch = useAppDispatch();
  return (
    <Col sm={2}>
      <Button variant="secondary" onClick={() => dispatch(open())}>
        Create folder
      </Button>
      <Container>
        {state.folders.map((folder) => (
          <Folder key={folder.name} folder={folder} />
        ))}
      </Container>
    </Col>
  );
}
