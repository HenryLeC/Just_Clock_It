import React from "react";
import "./TopNav.css";
import { auth } from "../../firebase";

function TopNav() {
  const signOut = () => auth.signOut();
  return (
    <div className="topnav">
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default TopNav;
