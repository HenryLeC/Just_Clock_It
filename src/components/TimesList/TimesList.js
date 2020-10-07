import React from "react";
import "../../index.css";
import Times from "./times-list";
import AddTimeEntryForm from "./add-time-entry-form";
import TopNav from "../TopNav/TopNav";

function TimesList() {
  return (
    <div>
      <TopNav />
      <div className="App">
        <h1>Just Clock It</h1>
        <Times />
        <AddTimeEntryForm />
      </div>
    </div>
  );
}

export default TimesList;
