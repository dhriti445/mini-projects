import React from "react";
import ReactDOM from "react-dom/client";

function ResImage() {
  return (
    <div>
      <img src="/tiger.jpg" alt="Tiger" />
    </div>
  );
}

function ResLink() {
  return (
    <div>
      <a href="https://www.britannica.com/animal/tiger" target="_blank" rel="noreferrer">
        britannica.com
      </a>
    </div>
  );
}

function ResCaption() {
  return (
    <div>
      <p>tiger | Facts, Information and Habitat…</p>
    </div>
  );
}

function SrchResult() {
  return (
    <div>
      <ResImage />
      <ResCaption />
      <ResLink />
    </div>
  );
}

function App() {
  return (
    <div>
      <SrchResult />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);