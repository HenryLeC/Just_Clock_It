import React, { useState, useEffect } from "react";
import { auth, firestore } from "../../firebase";

const SORT_OPTIONS = {
  TIME_ASC: { column: "time_seconds", direction: "asc" },
  TIME_DESC: { column: "time_seconds", direction: "desc" },

  TITLE_ASC: { column: "title", direction: "asc" },
  TITLE_DESC: { column: "title", direction: "desc" },
};

function useTimes(sortBy = "TIME_ASC") {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("times")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTimes(newTimes);
      });

    return () => unsubscribe();
  }, [sortBy]);

  return times;
}

export default function Times() {
  const [sortBy, setSortBy] = useState("TIME_ASC");
  const times = useTimes(sortBy);

  const deleteItem = (e) => {
    const id = e.currentTarget.id;
    firestore
      .collection("users")
      .doc(auth.currentUser.uid)
      .collection("times")
      .doc(id)
      .delete();
  };

  return (
    <div>
      <h2>Times List</h2>
      <div>
        <label>Sort By</label>
        {"   "}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.currentTarget.value)}
        >
          <option value="TIME_ASC">Time (fastest first)</option>
          <option value="TIME_DESC">Time (slowest first)</option>
          <option disabled>------</option>
          <option value="TITLE_ASC">Title (a-z)</option>
          <option value="TITLE_DESC">Title (z-a)</option>
        </select>
      </div>

      <ol>
        {times.map((time) => (
          <li key={time.id}>
            <div className="time-entry" style={{ padding: "0.5rem" }}>
              {time.title}
              <code className="time">{time.time_seconds} seconds</code>
              <p
                onClick={deleteItem}
                style={{ cursor: "pointer", color: "red", margin: "0" }}
                id={time.id}
              >
                X
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
