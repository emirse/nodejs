var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LessonSchema = Schema({
  lessonName: {
    type: String,
    required: [true, "'{PATH}' alanı boş geçilemez."],
  },
});
module.exports = mongoose.model("Lesson", LessonSchema);
