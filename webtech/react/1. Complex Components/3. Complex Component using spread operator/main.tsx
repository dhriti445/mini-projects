import React from "react";
import ReactDOM from "react-dom/client";

function ResImage({ src }) {
  return (
    <div>
      <img src={src} alt="Result" />
    </div>
  );
}

function ResCaption({ caption }) {
  return (
    <div>
      <p>{caption}</p>
    </div>
  );
}

function ResLink({ href, linktext }) {
  return (
    <div>
      <a href={href} target="_blank" rel="noreferrer">
        {linktext}
      </a>
    </div>
  );
}

function SrchResult(props) {
  return (
    <div>
      {/* Spread all props to child components */}
      <ResImage {...props} />
      <ResCaption {...props} />
      <ResLink {...props} />
    </div>
  );
}

function App() {
  return (
    <div>
      <SrchResult
        src="/tiger.jpg"
        caption="tiger | Facts, Information and Habitat…"
        href="https://www.britannica.com/animal/tiger"
        linktext="britannica.com"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
