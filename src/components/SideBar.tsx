import { Button, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { open } from "../features/modal/modalSlice";
import { Folder } from "./Folder";

export function SideBar() {
  const state = useAppSelector((state) => state.folders);

  const dispatch = useAppDispatch();
  return (
    <Col sm={2} className="">
      <Button variant="secondary" onClick={() => dispatch(open())}>
        Create folder
      </Button>
      <ul className="mt-3 nav nav-pills flex-column mb-auto">
        {state.folders.map((folder) => (
          <Folder key={folder.name} folder={folder} />
        ))}
      </ul>
    </Col>
  );
}
