import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  investing: [
    { name: "RICH DAD POOR DAD", rating: "4/5" },
    { name: "The Pyschology Of Money", rating: "4.4/5" }
  ],

  habits: [
    { name: "The 5AM Club", rating: "4.3/5" },
    { name: "Atomic Habits", rating: "4.8/5" }
  ],

  influencing: [
    { name: "How To Win Friends & Influence People", rating: "4.7/5" }
  ],

  mindpower: [{ name: "The Power of Your Subconscious Mind", rating: "4.1/5" }],

  business: [
    { name: "The Richest Man In Babylon", rating: "4.6/5" },
    { name: "Think & Grow Rich", rating: "4.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 PRO Book Recommedation </h1>
      <p style={{ fontSize: "smaller" }}>
        {""}I will suggest you best book which I've read in 2021. {""}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
