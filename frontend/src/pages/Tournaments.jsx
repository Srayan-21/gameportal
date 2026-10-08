import { useState } from "react";

function Tournaments() {
  const [registered, setRegistered] = useState([]);

  const tournaments = [
    {
      id: 1,
      name: "BGMI Championship",
      game: "BGMI",
      date: "20 October 2026",
      teams: 16,
      prize: "₹10,000",
      status: "Registration Open",
    },
    {
      id: 2,
      name: "Valorant Clash",
      game: "Valorant",
      date: "25 October 2026",
      teams: 8,
      prize: "₹15,000",
      status: "Registration Open",
    },
    {
      id: 3,
      name: "Free Fire Battle",
      game: "Free Fire",
      date: "30 October 2026",
      teams: 12,
      prize: "₹8,000",
      status: "Upcoming",
    },
  ];

  const handleRegister = (id) => {
    if (!registered.includes(id)) {
      setRegistered([...registered, id]);
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <p className="tagline">🏆 COMPETE & WIN</p>
        <h1>Available Tournaments</h1>
        <p className="page-description">
          Choose a tournament and register your team to start competing.
        </p>
      </div>

      <div className="card-grid">
        {tournaments.map((tournament) => (
          <div className="tournament-card" key={tournament.id}>
            <div className="game-icon">
              🎮
            </div>

            <span className="status">
              {tournament.status}
            </span>

            <h2>{tournament.name}</h2>

            <p>
              <strong>Game:</strong> {tournament.game}
            </p>

            <p>
              <strong>Date:</strong> {tournament.date}
            </p>

            <p>
              <strong>Teams:</strong> {tournament.teams}
            </p>

            <div className="prize">
              <span>Prize Pool</span>
              <strong>{tournament.prize}</strong>
            </div>

            <button
              className="primary-btn full"
              onClick={() => handleRegister(tournament.id)}
            >
              {registered.includes(tournament.id)
                ? "✓ Registered"
                : "Register Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournaments;