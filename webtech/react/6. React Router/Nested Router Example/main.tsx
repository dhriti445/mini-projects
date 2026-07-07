import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

// Home Component
function Home() {
  return <h1>🏠 Home Page</h1>;
}

// Products Component (Parent)
function Products() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>🛍️ Products Page</h1>

      <nav style={{ marginBottom: "1rem" }}>
        <Link to="car" style={{ marginRight: "10px" }}>
          Car Products
        </Link>
        <Link to="bike">Bike Products</Link>
      </nav>

      {/* 🔹 Child routes render here */}
      <Outlet />
    </div>
  );
}

// CarProducts Component (Child)
function CarProducts() {
  return (
    <div>
      <h2>🚗 Car Products</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

// BikeProducts Component (Child)
function BikeProducts() {
  return (
    <div>
      <h2>🏍️ Bike Products</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

// Contact Component
function Contact() {
  return <h1>☎️ Contact Page</h1>;
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: "1rem", backgroundColor: "#f3f3f3" }}>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/products" style={{ marginRight: "10px" }}>
            Products
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 🧩 Nested Route setup */}
          <Route path="/products" element={<Products />}>
            <Route path="car" element={<CarProducts />} />
            <Route path="bike" element={<BikeProducts />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
