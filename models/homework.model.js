var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HomeworkSchema = Schema({
  homework: { type: String, required: [true, "'{PATH}' alanı boş geçilemez."] },
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: [true, "'{PATH}' alanı boş geçilemez."],
  },
  lesson: {
    type: Schema.Types.ObjectId,
    ref: "Lesson",
    required: [true, "'{PATH}' alanı boş geçilemez."],
  },
  score: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Homework", HomeworkSchema);
