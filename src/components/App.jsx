import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, updateText] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function updateTitle(event) {
    updateText(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <form onClick={updateTitle}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button onClick={updateTitle}>Submit</button>
      </form>
    </div>
  );
}

export default App;
