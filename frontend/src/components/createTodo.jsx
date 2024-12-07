/* eslint-disable no-unused-vars */
import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (!title.trim() || !description.trim()) {
      alert("Both title and description are required.");
      return;
    }

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }), // Send the todo as JSON
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Failed to add todo: ${res.statusText}`);
        }
        const json = await res.json();
        alert("Todo Added!");
        setTitle(""); // Clear the input fields
        setDescription("");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while adding the todo.");
      });
  };

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update state on input change
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update state on input change
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={handleAddTodo}
      >
        Add a Todo
      </button>
    </div>
  );
}
