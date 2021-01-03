import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, updateText] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function updateTitle() {
    updateText(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={updateTitle}>Submit</button>
    </div>
  );
}

export default App;
