import { Button, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { open } from "../features/modal/modalSlice";
import { Folder } from "./Folder";
import { SelectedFolder } from "./SelectedFolder";

export function SideBar() {
  const state = useAppSelector((state) => state.folders);

  const dispatch = useAppDispatch();
  return (
    <>
      <Col sm={2}>
        <Button variant="secondary" onClick={() => dispatch(open())}>
          Create folder
        </Button>
        <ul className="mt-3 nav nav-pills flex-column mb-auto">
          {state.folders.map((folder) => (
            <Folder key={folder.name} folder={folder} />
          ))}
        </ul>
      </Col>
      <Switch>
        <Route exact path={`/folders/:name`}>
          <SelectedFolder />
        </Route>
      </Switch>
    </>
  );
}
