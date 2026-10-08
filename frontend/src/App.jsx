import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Paper,
} from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🎮 GameZone
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button color="inherit" component={Link} to="/tournaments">
          Tournaments
        </Button>

        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>

        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function Home() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#111827",
          color: "white",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Gaming Tournament Portal
        </Typography>

        <Typography variant="h6" sx={{ mb: 4 }}>
          Compete • Create • Conquer
        </Typography>

        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/tournaments"
        >
          Explore Tournaments
        </Button>
      </Box>

      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Why Choose GameZone?
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  🏆 Tournaments
                </Typography>
                <Typography>
                  Discover and participate in exciting gaming tournaments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  👥 Teams
                </Typography>
                <Typography>
                  Create teams and compete with your friends.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  📊 Leaderboard
                </Typography>
                <Typography>
                  Track tournament results and rankings.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

function Tournaments() {
  const tournaments = [
    {
      name: "BGMI Championship",
      game: "BGMI",
      prize: "₹50,000",
      teams: "16 Teams",
    },
    {
      name: "Valorant Battle Cup",
      game: "Valorant",
      prize: "₹30,000",
      teams: "8 Teams",
    },
    {
      name: "FIFA Gaming League",
      game: "EA FC",
      prize: "₹20,000",
      teams: "16 Players",
    },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom>
        Upcoming Tournaments
      </Typography>

      <Grid container spacing={3}>
        {tournaments.map((tournament) => (
          <Grid item xs={12} md={4} key={tournament.name}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  {tournament.name}
                </Typography>

                <Typography>Game: {tournament.game}</Typography>
                <Typography>Prize: {tournament.prize}</Typography>
                <Typography>
                  Participants: {tournament.teams}
                </Typography>

                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Register
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function Login() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
}

function Register() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create Account
        </Typography>

        <TextField
          fullWidth
          label="Full Name"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Email"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </Paper>
    </Container>
  );
}

function Dashboard() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3">
        Player Dashboard
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Welcome to your gaming dashboard.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                My Tournaments
              </Typography>
              <Typography>
                3 Registered
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                My Team
              </Typography>
              <Typography>
                Team Phoenix
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Ranking
              </Typography>
              <Typography>
                #12
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
