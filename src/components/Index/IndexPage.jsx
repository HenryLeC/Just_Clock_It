import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../../firebase";
import "./IndexPage.css";

export default function IndexPage() {
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

  const loginWithGoogle = () => {
    const google = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(google);
  };

  return (
    <div className="App">
      <div className="button" onClick={loginWithGoogle}>
        <p>Log In With Google</p>
      </div>

      {auth && <Redirect to={"/home"} />}
    </div>
  );
}
