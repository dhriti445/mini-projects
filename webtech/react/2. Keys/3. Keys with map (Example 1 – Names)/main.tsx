import React from "react";
import ReactDOM from "react-dom/client";

function NameList(props) {
  const names = props.names;
  const listItems = names.map((name, index) => (
    <li key={index}>{name}</li>
  ));
  return <ul>{listItems}</ul>;
}

const names = ["Batman", "Ironman", "Spiderman"];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NameList names={names} />);
