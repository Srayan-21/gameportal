function Navbar({ setPage }) {
  return (
    <nav className="navbar">

      <h2>🎮 GameArena</h2>

      <div className="nav-links">

        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("tournaments")}>
          Tournaments
        </button>

        <button onClick={() => setPage("teams")}>
          Teams
        </button>

        <button onClick={() => setPage("matches")}>
          Matches
        </button>
        <button onClick={() => setPage("results")}>
  Results
</button>

        <button onClick={() => setPage("leaderboard")}>
          Leaderboard
        </button>

        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPage("login")}>
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;