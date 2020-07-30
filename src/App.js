import React, { useState } from "react";
import "./App.css";

import { ALL_POINTS, ALL_SUITS } from "./components/PlayingCard/constants";
import PlayingCard from "./components/PlayingCard";

function App() {
  const [size, setSize] = useState("normal");

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">
          Playing Cards Galary
          <iframe
            src="https://ghbtns.com/github-btn.html?user=clysto&repo=react-poker-components&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
            className="gh-btn"
          ></iframe>
        </h1>
        <div className="control">
          <div className="btn-group">
            <button onClick={() => setSize("small")}>small</button>
            <button onClick={() => setSize("normal")}>normal</button>
            <button onClick={() => setSize("big")}>big</button>
          </div>
        </div>
        <div>
          {ALL_POINTS.map((point) => {
            return ALL_SUITS.map((suit) => {
              return (
                <PlayingCard
                  size={size}
                  suit={suit}
                  point={point}
                  key={suit + point}
                  className="test-card"
                ></PlayingCard>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
