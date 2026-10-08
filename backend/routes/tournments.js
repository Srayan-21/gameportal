const express = require("express");
const jwt = require("jsonwebtoken");
const Tournament = require("../models/Tournment");

const router = express.Router();


// ============================================
// AUTHENTICATION MIDDLEWARE
// ============================================

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Login required",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};


// ============================================
// GET ALL TOURNAMENTS
// ============================================

router.get("/", async (req, res) => {
  try {

    const tournaments = await Tournament.find()
      .sort({ createdAt: -1 });

    res.json(tournaments);

  } catch (error) {

    console.error(
      "Tournament fetch error:",
      error
    );

    res.status(500).json({
      message: "Failed to fetch tournaments",
    });
  }
});


// ============================================
// GET SINGLE TOURNAMENT
// ============================================

router.get("/:id", async (req, res) => {
  try {

    const tournament =
      await Tournament.findById(
        req.params.id
      );

    if (!tournament) {
      return res.status(404).json({
        message: "Tournament not found",
      });
    }

    res.json(tournament);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch tournament",
    });
  }
});


// ============================================
// CREATE TOURNAMENT
// ============================================

router.post(
  "/",
  authenticate,
  async (req, res) => {

    try {

      const {
        name,
        game,
        description,
        date,
        prize,
        maxPlayers,
      } = req.body;


      if (!name || !game || !date) {

        return res.status(400).json({
          message:
            "Name, game and date are required",
        });

      }


      const tournament =
        await Tournament.create({

          name,

          game,

          description:
            description || "",

          date,

          prize:
            Number(prize) || 0,

          maxPlayers:
            Number(maxPlayers) || 100,

          organizer:
            req.user.id,

          registeredPlayers: [],

          status: "UPCOMING",

        });


      res.status(201).json({

        message:
          "Tournament created successfully",

        tournament,

      });

    } catch (error) {

      console.error(
        "Tournament creation error:",
        error
      );

      res.status(500).json({
        message:
          "Failed to create tournament",
      });

    }

  }
);


// ============================================
// JOIN TOURNAMENT
// ============================================

router.post(
  "/:id/register",
  authenticate,
  async (req, res) => {

    try {

      const tournament =
        await Tournament.findById(
          req.params.id
        );


      if (!tournament) {

        return res.status(404).json({
          message:
            "Tournament not found",
        });

      }


      // Check if already registered

      const alreadyRegistered =
        tournament.registeredPlayers.some(
          (player) =>
            player.toString() ===
            req.user.id.toString()
        );


      if (alreadyRegistered) {

        return res.status(400).json({
          message:
            "You are already registered",
        });

      }


      // Check player limit

      if (
        tournament.registeredPlayers.length >=
        tournament.maxPlayers
      ) {

        return res.status(400).json({
          message:
            "Tournament is full",
        });

      }


      tournament.registeredPlayers.push(
        req.user.id
      );


      await tournament.save();


      res.json({

        message:
          "Tournament registration successful",

        tournament,

      });


    } catch (error) {

      console.error(
        "Tournament registration error:",
        error
      );

      res.status(500).json({
        message:
          "Failed to register for tournament",
      });

    }

  }
);


// ============================================
// DELETE TOURNAMENT
// ============================================

router.delete(
  "/:id",
  authenticate,
  async (req, res) => {

    try {

      const tournament =
        await Tournament.findById(
          req.params.id
        );


      if (!tournament) {

        return res.status(404).json({
          message:
            "Tournament not found",
        });

      }


      if (
        tournament.organizer.toString() !==
        req.user.id.toString()
      ) {

        return res.status(403).json({
          message:
            "Only the organizer can delete this tournament",
        });

      }


      await tournament.deleteOne();


      res.json({
        message:
          "Tournament deleted successfully",
      });


    } catch (error) {

      res.status(500).json({
        message:
          "Failed to delete tournament",
      });

    }

  }
);


module.exports = router;