import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "http://localhost:5000/api";

function Home() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/tournaments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load tournaments");
        }

        return response.json();
      })
      .then((data) => {
        setTournaments(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error(error);
        setTournaments([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const featured = [
    {
      game: "BGMI",
      icon: "🎮",
      title: "Arena Championship",
      prize: "₹50,000",
      players: "64 / 100",
      type: "LIVE",
    },
    {
      game: "VALORANT",
      icon: "⚔️",
      title: "Valorant Masters",
      prize: "₹1,00,000",
      players: "32 / 64",
      type: "UPCOMING",
    },
    {
      game: "FREE FIRE",
      icon: "🔥",
      title: "Clash Royale",
      prize: "₹25,000",
      players: "48 / 100",
      type: "UPCOMING",
    },
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <Link to="/" className="logo">
          <span className="logo-icon">⚡</span>
          <span>
            ARENA<span className="logo-x">X</span>
          </span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tournaments">Tournaments</Link>
          <Link to="/matches">Matches</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/dashboard">Organizer</Link>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="signup-btn">
            Sign Up
          </Link>
        </div>

      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">

          <div className="live-badge">
            <span className="live-dot"></span>
            LIVE ESPORTS PLATFORM
          </div>

          <h1>
            DOMINATE
            <br />
            <span>THE ARENA.</span>
          </h1>

          <p>
            Compete in tournaments. Build your team.
            <br />
            Rise through the leaderboard.
          </p>

          <div className="hero-buttons">

            <Link
              to="/tournaments"
              className="primary-btn"
            >
              Explore Tournaments →
            </Link>

            <Link
              to="/dashboard"
              className="secondary-btn"
            >
              + Create Tournament
            </Link>

          </div>

          <div className="hero-trust">
            <span>🏆 Competitive Gaming</span>
            <span>⚡ Live Matches</span>
            <span>🎮 Multiple Games</span>
          </div>

        </div>


        {/* HERO CARD */}
        <div className="hero-visual">

          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>

          <div className="gaming-card">

            <div className="card-top">
              <span>🔥 LIVE NOW</span>
              <span>BGMI</span>
            </div>

            <div className="gaming-icon">
              🎮
            </div>

            <h3>ARENA</h3>
            <h3 className="championship">
              CHAMPIONSHIP
            </h3>

            <div className="card-info">

              <div>
                <small>PRIZE POOL</small>
                <strong>₹50,000</strong>
              </div>

              <div>
                <small>PLAYERS</small>
                <strong>64/100</strong>
              </div>

            </div>

            <Link
              to="/tournaments"
              className="gaming-card-button"
            >
              VIEW TOURNAMENT →
            </Link>

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="stats">

        <div className="stat">
          <strong>1,250+</strong>
          <span>Registered Players</span>
        </div>

        <div className="stat">
          <strong>85+</strong>
          <span>Tournaments</span>
        </div>

        <div className="stat">
          <strong>₹12L+</strong>
          <span>Total Prize Pool</span>
        </div>

        <div className="stat">
          <strong>40+</strong>
          <span>Competitive Games</span>
        </div>

      </section>


      {/* FEATURED */}
      <section className="section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              🔥 FEATURED
            </span>

            <h2>
              Featured Tournaments
            </h2>

            <p>
              Find your next competition and prove you're the best.
            </p>
          </div>

          <Link
            to="/tournaments"
            className="view-all"
          >
            View All →
          </Link>

        </div>


        <div className="tournament-grid">

          {featured.map((tournament, index) => (

            <div
              className="tournament-card"
              key={index}
            >

              <div className="tournament-banner">

                <span className="game-icon">
                  {tournament.icon}
                </span>

                <span
                  className={
                    tournament.type === "LIVE"
                      ? "status live"
                      : "status"
                  }
                >
                  {tournament.type}
                </span>

              </div>

              <div className="tournament-body">

                <small>
                  {tournament.game} • SEASON 2026
                </small>

                <h3>
                  {tournament.title}
                </h3>

                <div className="tournament-details">

                  <div>
                    <span>Prize Pool</span>
                    <strong>{tournament.prize}</strong>
                  </div>

                  <div>
                    <span>Players</span>
                    <strong>{tournament.players}</strong>
                  </div>

                </div>

                <Link
                  to="/tournaments"
                  className="join-btn"
                >
                  View Tournament →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* DATABASE */}
      <section className="section database-section">

        <div className="section-heading">

          <div>

            <span className="section-label">
              ⚡ LIVE DATABASE
            </span>

            <h2>
              Available Tournaments
            </h2>

            <p>
              Real tournaments loaded from MongoDB.
            </p>

          </div>

        </div>


        {loading ? (

          <div className="empty-box">
            Loading tournaments...
          </div>

        ) : tournaments.length === 0 ? (

          <div className="empty-box">

            <div className="empty-icon">
              🎮
            </div>

            <h3>
              No tournaments yet
            </h3>

            <p>
              Create your first tournament.
            </p>

            <Link
              to="/dashboard"
              className="primary-btn"
            >
              + Create Tournament
            </Link>

          </div>

        ) : (

          <div className="tournament-grid">

            {tournaments.map((tournament) => (

              <div
                className="tournament-card"
                key={tournament._id}
              >

                <div className="tournament-banner">

                  <span className="game-icon">
                    🎮
                  </span>

                  <span className="status">
                    {tournament.status}
                  </span>

                </div>

                <div className="tournament-body">

                  <small>
                    {tournament.game}
                  </small>

                  <h3>
                    {tournament.name}
                  </h3>

                  <div className="tournament-details">

                    <div>
                      <span>Prize Pool</span>
                      <strong>
                        ₹{tournament.prize || 0}
                      </strong>
                    </div>

                    <div>
                      <span>Players</span>
                      <strong>
                        {tournament.registeredPlayers?.length || 0}
                        /
                        {tournament.maxPlayers}
                      </strong>
                    </div>

                  </div>

                  <Link
                    to="/tournaments"
                    className="join-btn"
                  >
                    View Tournament →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* CTA */}
      <section className="cta">

        <div>

          <span className="section-label">
            READY TO COMPETE?
          </span>

          <h2>
            Your next victory
            <br />
            starts here.
          </h2>

          <p>
            Join thousands of players competing for glory,
            rankings and rewards.
          </p>

          <Link
            to="/tournaments"
            className="primary-btn"
          >
            Enter The Arena →
          </Link>

        </div>

        <div className="cta-symbol">
          ⚡
        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          ⚡ ARENA<span>X</span>
        </div>

        <p>
          The next generation esports tournament platform.
        </p>

        <div className="footer-links">
          <span>About</span>
          <span>Contact</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>

        <small>
          © 2026 ArenaX. All rights reserved.
        </small>

      </footer>

    </div>
  );
}

export default Home;