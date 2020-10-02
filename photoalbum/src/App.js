import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";
import List from "./components/List";
import Album from "./components/Album";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/album/:id">
          <Album />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
