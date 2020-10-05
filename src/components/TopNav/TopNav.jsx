import React from "react";
import "./TopNav.css";
import firebase from "../../firebase";

function TopNav() {
  const signOut = () => firebase.auth().signOut();
  return (
    <div className="topnav">
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default TopNav;
