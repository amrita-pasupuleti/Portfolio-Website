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
    <div className="container">
      <div className="button-list">
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
    <div>
      <p className="count">Count: {count}</p>
      <button className="num-btn" onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
      <button className="reset-btn" onClick={() => setCount((c) => 0)}>
        Reset
      </button>
      <button className="save-btn" onClick={() => setShowSave((show) => !show)}>
        {showSave ? "Close" : "Save"}
      </button>

      {showSave ? <SaveCount setShowSave={setShowSave} count={count} /> : null}

      <div className="scores">
        <h1 className="scoresh1">Saved Scores</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score) => (
              <tr key={score.id}>
                <td>{score.name}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SaveCount({ count, setShowSave }) {
  const [name, setName] = useState("");
  const [setError] = useState("");

  const saveScore = async () => {
    if (name.trim() === "") {
      setError("Name is required.");
      return;
    }

    const { data: existingScores, error: existingScoresError } = await supabase
      .from("scores")
      .select()
      .eq("name", name);

    if (existingScoresError) {
      console.error("Error checking existing scores:", existingScoresError);
      return;
    }

    if (existingScores && existingScores.length > 0) {
      setError("Name is already taken.");
      return;
    }
  };

  return (
    <div className="scoreForm">
      <p>Save Your Score Here:</p>
      <label>
        Name:{" "}
        <input
          className="form"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className="savebtn" onClick={saveScore}>
        Save
      </button>
    </div>
  );
}

function Calculator() {
  return (
    <>
      <p className="info">Grade calculator in progress . . .</p>
    </>
  );
}

function Other() {
  return (
    <>
      <p className="info">In progress . . .</p>
    </>
  );
}

export default Clicker;
