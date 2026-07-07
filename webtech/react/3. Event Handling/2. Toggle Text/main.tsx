import React from "react";
import ReactDOM from "react-dom/client";

function ToggleText() {
  let isVisible = true;

  function toggle() {
    isVisible = !isVisible;
    document.getElementById("message").textContent = 
      isVisible ? "Hello, React!" : "";
  }

  return (
    <div>
      <h2>Toggle Text</h2>
      <p id="message">Hello, React!</p>
      <button onClick={toggle}>Show/Hide</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToggleText />);
