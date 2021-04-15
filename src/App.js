import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import DashboardPage from "./Pages/DashboardPage";
import PostsPage from "./Pages/PostsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/posts" exact component={PostsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
