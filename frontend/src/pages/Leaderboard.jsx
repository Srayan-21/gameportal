import { useState } from "react";

function Leaderboard() {
  const [teams, setTeams] = useState([
    {
      rank: 1,
      name: "Phoenix",
      matches: 5,
      wins: 4,
      losses: 1,
      points: 120,
    },
    {
      rank: 2,
      name: "Titans",
      matches: 5,
      wins: 3,
      losses: 2,
      points: 105,
    },
    {
      rank: 3,
      name: "Warriors",
      matches: 5,
      wins: 3,
      losses: 2,
      points: 90,
    },
    {
      rank: 4,
      name: "Legends",
      matches: 5,
      wins: 2,
      losses: 3,
      points: 82,
    },
  ]);

  const sortLeaderboard = () => {
    const sorted = [...teams]
      .sort((a, b) => b.points - a.points)
      .map((team, index) => ({
        ...team,
        rank: index + 1,
      }));

    setTeams(sorted);
  };

  return (
    <div className="page">

      <div className="page-header">
        <p className="tagline">🏆 TOP TEAMS</p>

        <h1>Leaderboard</h1>

        <p className="page-description">
          Track team performance and tournament rankings.
        </p>
      </div>

      <div className="leaderboard-top">
        <div>
          <h2>🏆 Tournament Rankings</h2>
          <p>Rankings are based on tournament points.</p>
        </div>

        <button
          className="primary-btn"
          onClick={sortLeaderboard}
        >
          Update Rankings
        </button>
      </div>

      <div className="leaderboard-table">

        <table>

          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Points</th>
            </tr>
          </thead>

          <tbody>

            {teams.map((team) => (
              <tr key={team.name}>

                <td>
                  {team.rank === 1
                    ? "🥇"
                    : team.rank === 2
                    ? "🥈"
                    : team.rank === 3
                    ? "🥉"
                    : team.rank}
                </td>

                <td>
                  <strong>{team.name}</strong>
                </td>

                <td>{team.matches}</td>

                <td>{team.wins}</td>

                <td>{team.losses}</td>

                <td>
                  <strong className="points">
                    {team.points}
                  </strong>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Leaderboard;