import React, { useState, useEffect } from "react";
import ChangeTheme from "./ChangeTheme";

export default function JournalApp() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("journalEntries");
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = () => {
    if (inputValue) {
      if (editingIndex !== null) {
        const updatedEntries = entries.map((entry, index) =>
          index === editingIndex
            ? { content: inputValue, timestamp: entry.timestamp }
            : entry
        );
        setEntries(updatedEntries);
        setEditingIndex(null);
      } else {
        const newEntry = {
          content: inputValue,
          timestamp: new Date().toLocaleString(),
        };
        setEntries([newEntry, ...entries]);
      }
      setInputValue("");
    }
  };

  const editEntry = (index) => {
    setInputValue(entries[index].content);
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
      <div className="header-container">
        <img src="notepad.png" alt="Notepad" className="inline-image" />
        <h1 className="text-2xl font-bold mt-5 mb-5">Pocket Blogger</h1>
        <img src="coffeecup.png" alt="Coffee Cup" className="inline-image" />
      </div>

      <p className="mb-5">Write a few lines a day!</p>
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
      <h2 className="text-2xl font-bold text-center mt-5 mb-5">
        Previous Entries
      </h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index} className="blogPost">
            <p>{entry.content}</p>
            <small className="text-gray-500">{entry.timestamp}</small>
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
