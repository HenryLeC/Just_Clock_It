import React, { useState, useEffect } from "react";
import "./index.css";
import TimesList from "./components/TimesList/TimesList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./components/Index/IndexPage";
import firebase from "./firebase";

export default function Router() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const unregister = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });

    return () => unregister();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {auth && <Route exact path="/home" component={TimesList} />}
        <Route path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
