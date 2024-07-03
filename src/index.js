import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
// ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);