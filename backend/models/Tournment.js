const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    game: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    date: {
      type: Date,
      required: true,
    },

    prize: {
      type: Number,
      default: 0,
    },

    maxPlayers: {
      type: Number,
      default: 100,
    },

    registeredPlayers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: [
        "UPCOMING",
        "LIVE",
        "COMPLETED",
      ],
      default: "UPCOMING",
    },
  },

  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "Tournament",
    tournamentSchema
  );