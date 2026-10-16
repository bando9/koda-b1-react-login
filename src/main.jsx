import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./register.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
);
