var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HomeworkSchema = Schema({
  homework: { type: String, require: true },
  student: { type: Schema.Types.ObjectId, ref: "Student", require: true },
  lesson: { type: Schema.Types.ObjectId, ref: "Lesson", require: true },
  score: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Homework", HomeworkSchema);
