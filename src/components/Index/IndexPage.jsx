import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import firebase, { auth } from "../../firebase";
import "./IndexPage.css";

export default function IndexPage() {
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

  const loginWithGoogle = () => {
    const google = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(google);
  };

  return (
    <div className="App">
      <div className="button" onClick={loginWithGoogle}>
        <p>Log In With Google</p>
      </div>

      {authed && <Redirect to={"/home"} />}
    </div>
  );
}
