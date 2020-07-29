# Playing Cards React Components

This is a very simple lib, which contains some playing card components. You can simply copy the components in the `components` directory to your own project.

## Usage

Render a king of spades:

```js
import PlayingCard from "./components/PlayingCard";


function App() {
  return (
    <PlayingCard
      size="normal"
      suit="♠"
      point="K"
    />
  );
}
```

Render all 52 playing cards:

```js
import React, { useState } from "react";
import "./App.css";

import { ALL_POINTS, ALL_SUITS } from "./components/PlayingCard/constants";
import PlayingCard from "./components/PlayingCard";

function App() {
  const [size, setSize] = useState("normal");

  return (
    <div className="App">
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
  );
}

export default App;
```