const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PomodoroSchema = new Schema({
  driver: {
    type: String,
    required: true
  },
  navigator: {
    type: String,
    required: true
  },
  periodLength: {
    // TODO: where do I want to handle ms conversion?
    type: Number,
    required: true
  },
  numPeriods: {
    type: Number,
    required: true
  },
  starteDateTime: {
    type: Date,
    default: Date()
  }
});

const Pomodoro = mongoose.model("pomodoro", PomodoroSchema);

module.exports = Pomodoro;
