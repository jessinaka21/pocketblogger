import React, { useState } from "react";

export default function JournalApp() {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addPost = () => {
    if (inputValue) {
      if (editingIndex !== null) {
        const updatedPosts = posts.map((post, index) =>
          index === editingIndex ? inputValue : post
        );
        setPosts(updatedPosts);
        setEditingIndex(null);
      } else {
        setPosts([inputValue, ...posts]);
      }
      setInputValue("");
    }
  };

  const editPost = (index) => {
    setInputValue(posts[index]);
    setEditingIndex(index);
  };

  const deletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
    if (editingIndex === index) {
      setInputValue("");
      setEditingIndex(null);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-center mt-5 mb-5">Pocket Blogger</h2>
      <p className="mb-5">Write a few lines a day! Click the "Inspiration" button for some quotes to get you started.</p>
      <div className>
        <input
          type="text"
          className="text-box"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Your words here..."
        />
        <button className="btn btn-primary" onClick={addPost}>
          {editingIndex !== null ? "Update" : "Post"}
        </button>
      </div>
      <ul>
        {posts.map((post, index) => (
          <li
            key={index}
            className="blogPost"
          >
            <p>{post}</p>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => editPost(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => deletePost(index)}
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
