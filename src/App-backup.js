import React from "react";
import "./styles.css";
import Assignments from "./pages/Assignments";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//Pages
import Home from "./pages/Home";
import Course from "./pages/Course";
import Program from "./pages/Program";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <PersistentDrawerLeft />
      <Switch>
        <Route 
          exact 
          from="/" 
          render={(props) => <Home {...props} />} 
        />
        <Route 
          exact 
          path="/course" 
          render={(props) => <Course {...props} />} 
        />
        <Route
          exact
          path="/program"
          render={(props) => <Program {...props} />}
        />
        <Route
          exact
          path="/Assignments"
          render={(props) => <Assignments {...props} />}
        />
        <Route
          exact
          path="/program"
          render={(props) => <Program {...props} />}
        />
      </Switch>
    </div>
  );
}
