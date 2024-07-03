
import React from "react";
import './../styles/App.css';
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to my website!</h1>
    </div>
  )
}

export default App
