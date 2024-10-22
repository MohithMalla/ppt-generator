import "./App.css";
import { useState } from "react";
import items from "./items.js";
import Inputpage from "./ppt.js"; // Ensure the path is correct
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export function App() {
  const [active, setActive] = useState(0);
  const [i, setI] = useState(0);

  return (
    <main>
      <section className="themes">
        {items.map((item, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <article
              key={item.image}
              className={isActive}
              onClick={() => {
                setActive(index);
                setI(item.header);
              }}
            >
              <img src={item.image} alt={`Template ${index + 1}`} />
            </article>
          );
        })}
      </section>
      <Link to="/inpt">
        <button
          id="sell"
          onClick={() => {
            localStorage.setItem('digit', i);
          }}
        >
          <p>SELECT</p>
        </button>
      </Link>
    </main>
  );
}

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/inpt' element={<Inputpage />} />
      </Routes>
    </BrowserRouter>
  );
}
