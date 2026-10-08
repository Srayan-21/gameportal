import { useState } from "react";
import MatchCard from "../components/matchcard";

function Matches() {
  const [matches, setMatches] = useState([
    {
      id: 1,
      round: "Semi Final",
      team1: "Phoenix",
      team2: "Titans",
      date: "20 October 2026",
      time: "10:00 AM",
      game: "BGMI",
      status: "Upcoming",
    },
    {
      id: 2,
      round: "Semi Final",
      team1: "Warriors",
      team2: "Legends",
      date: "20 October 2026",
      time: "12:00 PM",
      game: "BGMI",
      status: "Upcoming",
    },
    {
      id: 3,
      round: "Final",
      team1: "TBD",
      team2: "TBD",
      date: "21 October 2026",
      time: "5:00 PM",
      game: "BGMI",
      status: "Upcoming",
    },
  ]);

  const updateStatus = (id) => {
    setMatches(
      matches.map((match) => {
        if (match.id === id) {
          return {
            ...match,
            status: match.status === "Upcoming"
              ? "Live"
              : "Completed",
          };
        }

        return match;
      })
    );
  };

  return (
    <div className="page">

      <div className="page-header">
        <p className="tagline">⚔️ TOURNAMENT MATCHES</p>

        <h1>Match Schedule</h1>

        <p className="page-description">
          View upcoming matches, schedules and live match status.
        </p>
      </div>

      <div className="matches-grid">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            onUpdateStatus={updateStatus}
          />
        ))}
      </div>

    </div>
  );
}

export default Matches;