import { Route, Switch } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { SideBar } from "./SideBar";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <>
          <SideBar />
          <SearchBar />
        </>
      </Route>
    </Switch>
  );
}
