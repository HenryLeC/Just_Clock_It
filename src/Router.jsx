import React, { useState, useEffect } from "react";
import "./index.css";
import TimesList from "./components/TimesList/TimesList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./components/Index/IndexPage";
import { auth } from "./firebase";

export default function Router() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const unregister = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });

    return () => unregister();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {authed && <Route exact path="/home" component={TimesList} />}
        <Route path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
