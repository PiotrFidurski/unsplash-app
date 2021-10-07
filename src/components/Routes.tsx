import { Route, Switch } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/:folder">
        <SearchBar />
      </Route>
    </Switch>
  );
}
