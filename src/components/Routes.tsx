import { Route, Switch } from "react-router-dom";
import { Main } from "./Main";
import { SideBar } from "./SideBar";

export function Routes() {
  return (
    <>
      <SideBar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </>
  );
}
