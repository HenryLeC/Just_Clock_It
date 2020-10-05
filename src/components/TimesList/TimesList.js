import React from "react";
import "../../index.css";
import Times_List from "./times-list";
import AddTimeEntryForm from "./add-time-entry-form";
import TopNav from "../TopNav/TopNav";

function TimesList() {
  return (
    <div>
      <TopNav />

      <div className="App">
        <h1>Just Clock It</h1>
        <Times_List />
        <AddTimeEntryForm />
      </div>
    </div>
  );
}

export default TimesList;
