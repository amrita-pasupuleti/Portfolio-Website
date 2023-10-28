import React, { useState, useEffect } from "react";
import supabase from "./supabase";
import "./clicker.css";

function Clicker() {
  const [selectedButton, setSelectedButton] = useState("cc");

  // Function to handle button clicks and update the selectedButton state
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <div class="container">
      <div class="button-list">
        <ul>
          <li>
            <button onClick={() => handleButtonClick("cc")}>
              Count Clicker
            </button>
          </li>
          <li>
            <button onClick={() => handleButtonClick("gc")}>
              Grade Calculator
            </button>
          </li>
          <li>
            <button onClick={() => handleButtonClick("button3")}>Other</button>
          </li>
        </ul>
      </div>

      <div className="main-content">
        {selectedButton === "cc" && <Counter />}
        {selectedButton === "gc" && <Calculator />}
        {selectedButton === "button3" && <Other />}
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [showSave, setShowSave] = useState(false);

  return (
    <div>
      <p className="count">Count: {count}</p>
      <button className="num-btn" onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
      <button className="reset-btn" onClick={() => setCount((c) => 0)}>
        Reset
      </button>
      <button className="save-btn" onClick={() => setShowSave((show) => !show)}>
        Save
      </button>

      {showSave ? <SaveCount setShowSave={setShowSave} /> : null}
    </div>
  );
}

function SaveCount() {
  const [scores, setScores] = useState([]);

  useEffect(function () {
    async function getScores() {
      let query = supabase.from("scores").select("*");

      const { data: scoresData } = await query.limit(500);

      setScores(scoresData);
    }
    getScores();
  }, []);

  return (
    <>
      <h1>Saved Scores</h1>
      <ul>
        {scores.map((score) => (
          <li key={score.id}>
            <strong>Name:</strong> {score.name}, <strong>Score:</strong>{" "}
            {score.score}
          </li>
        ))}
      </ul>
    </>
  );
}

function Calculator() {
  return (
    <>
      <p>grade calculator in progress</p>
    </>
  );
}

function Other() {
  return (
    <>
      <p>In progress</p>
    </>
  );
}

export default Clicker;
