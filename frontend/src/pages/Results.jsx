import { useState } from "react";

function Results() {
  const [results, setResults] = useState([
    {
      id: 1,
      match: "Phoenix vs Titans",
      winner: "Phoenix",
      score: "15 - 10",
      status: "Completed",
    },
    {
      id: 2,
      match: "Warriors vs Legends",
      winner: "Warriors",
      score: "12 - 8",
      status: "Completed",
    },
  ]);

  const [matchName, setMatchName] = useState("");
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState("");

  const addResult = () => {
    if (!matchName.trim() || !winner.trim() || !score.trim()) {
      alert("Please enter all result details.");
      return;
    }

    const newResult = {
      id: results.length + 1,
      match: matchName,
      winner: winner,
      score: score,
      status: "Completed",
    };

    setResults([...results, newResult]);

    setMatchName("");
    setWinner("");
    setScore("");
  };

  return (
    <div className="page">

      <div className="page-header">

        <p className="tagline">
          🏆 MATCH RESULTS
        </p>

        <h1>
          Results Management
        </h1>

        <p className="page-description">
          Record match results and track tournament winners.
        </p>

      </div>

      <div className="results-layout">

        {/* Add Result */}

        <div className="card result-form">

          <h2>
            Add Match Result
          </h2>

          <label>
            Match
          </label>

          <input
            type="text"
            placeholder="Example: Phoenix vs Titans"
            value={matchName}
            onChange={(e) => setMatchName(e.target.value)}
          />

          <label>
            Winner
          </label>

          <input
            type="text"
            placeholder="Winning team"
            value={winner}
            onChange={(e) => setWinner(e.target.value)}
          />

          <label>
            Score
          </label>

          <input
            type="text"
            placeholder="Example: 15 - 10"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />

          <button
            className="primary-btn full"
            onClick={addResult}
          >
            Add Result
          </button>

        </div>


        {/* Results List */}

        <div className="results-list">

          <h2>
            Recent Results
          </h2>

          {results.map((result) => (

            <div
              className="result-card"
              key={result.id}
            >

              <div>

                <span className="result-status">
                  {result.status}
                </span>

                <h3>
                  {result.match}
                </h3>

                <p>
                  Winner: <strong>{result.winner}</strong>
                </p>

              </div>

              <div className="result-score">
                {result.score}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Results;