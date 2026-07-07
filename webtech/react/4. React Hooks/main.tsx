//useState

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("");

  return (
    <div>
      <h1>My favorite color is {color}</h1>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("Red")}>Red</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavoriteColor />);


-----------------------------------------------------------------
//useEffect

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return <h1>Count: {count}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);

----------------------------------------------------------------
//useContext

import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

// Create Context
const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Pavan");

  return (
    <UserContext.Provider value={user}>
      <Child />
      <button onClick={() => setUser("React Dev")}>Change User</button>
    </UserContext.Provider>
  );
}

function Child() {
  const user = useContext(UserContext);
  return <h1>Hello, {user}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

---------------------------------------------------------------------------------------
//useReducer

import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age":
      return { age: state.age + 1 };
    default:
      return state;
  }
}

function AgeCounter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <div>
      <p>Age: {state.age}</p>
      <button onClick={() => dispatch({ type: "incremented_age" })}>
        Increment Age
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AgeCounter />);
