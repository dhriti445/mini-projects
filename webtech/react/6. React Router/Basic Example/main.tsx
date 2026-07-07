import React from "react";
import ReactDOM from "react-dom/client";
import {  BrowserRouter,  Routes,  Route,  NavLink} from "react-router-dom";

function Home() {
  return <h2>This a Home page - See the URL</h2>;
}
function About() {
  return <h2>This a About page - See the URL</h2>;
}
function Contact() {
  return <h2>This a Contact page - Phone No:9481187128 Email: pavanac@pes.edu</h2>;
}
function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> |<NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
		<Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
