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
      <Col sm={3} className="mw-100 bg-dark sm-50 sidebarContainer">
        <div className="mw-100 p-2">
          <Button
            variant="secondary"
            className="w-100"
            onClick={() => dispatch(open())}
          >
            Create folder
          </Button>
          <ul className="mt-3 nav nav-pills flex-column mb-auto">
            {state.folders.map((folder) => (
              <Folder key={folder.name} folder={folder} />
            ))}
          </ul>
        </div>
      </Col>
      <Switch>
        <Route exact path={`/folders/:name`}>
          <SelectedFolder />
        </Route>
      </Switch>
    </>
  );
}
