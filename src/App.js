import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import IssueList from "./components/IssueList";
import IssueEdit from "./components/IssueEdit";
import IssueShow from "./components/IssueShow";
import IssueDelete from "./components/IssueDelete";
import IssueCreate from "./components/IssueCreate";
import Header from "./components/Header";

// 1. create the route.
// 2. create header element
// 3. create navigation with components

const app = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <div>
            <Header />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Switch>
              <Route path="/" exact component={IssueList} />
              <Route path="/issue/new" exact component={IssueCreate} />
              <Route path="/issue/edit/:id" exact component={IssueEdit} />
              <Route path="/issue/:id" exact component={IssueShow} />
              <Route path="/issue/delete/:id" exact component={IssueDelete} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default app;
