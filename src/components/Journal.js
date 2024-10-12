import React, { useState } from "react";

export default function JournalApp() {
  const [entries, setEntries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addEntry = () => {
    if (inputValue) {
      if (editingIndex !== null) {
        const updatedEntries = entries.map((entry, index) =>
          index === editingIndex ? inputValue : entry
        );
        setEntries(updatedEntries);
        setEditingIndex(null);
      } else {
        setEntries([inputValue, ...entries]);
      }
      setInputValue("");
    }
  };

  const editEntry = (index) => {
    setInputValue(entries[index]);
    setEditingIndex(index);
  };

  const deleteEntry = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
    if (editingIndex === index) {
      setInputValue("");
      setEditingIndex(null);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-center mt-5 mb-5">
        Pocket Blogger
      </h2>
      <p className="mb-5">
        Write a few lines a day! Click the "Inspiration" button for some quotes
        to get you started.
      </p>
      <div className="entryInput">
        <input
          type="text"
          className="text-box"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Your words here..."
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={addEntry}>
          {editingIndex !== null ? "Update Entry" : "Add Entry"}
        </button>
      </div>
      <ul>
        {entries.map((entry, index) => (
          <li key={index} className="blogPost">
            <p>{entry}</p>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => editEntry(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => deleteEntry(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
