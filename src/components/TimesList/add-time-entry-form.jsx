import React, { useState } from "react";
import firebase from "../../firebase";

export default function AddTimeEntryForm() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("times")
      .add({
        title,
        time_seconds: time,
      })
      .then(() => {
        setTitle("");
        setTime("");
      });
  }

  return (
    <div>
      <h4>Add Time Entry</h4>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label>Time</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.currentTarget.value)}
          />
        </div>
        <button>Add Time Entry</button>
      </form>
    </div>
  );
}
