import React from "react";
import ReactDOM from "react-dom/client";

function Stuff() {
  return [
    <p key="1">Batman</p>,
    <p key="2">IronMan</p>,
    <p key="3">SpiderMan</p>,
  ];
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Stuff />);
