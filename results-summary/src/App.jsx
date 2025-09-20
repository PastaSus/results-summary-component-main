import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div class="results-summary__intro">
      <p class="results-summary__main-heading">Your Result</p>

      <p class="results__circle">
        <span class="results__score">76</span>
        <span class="results__outof">of 100</span>
      </p>

      <h2 class="results__description">Great</h2>
      <p class="results__full-details">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default App;
