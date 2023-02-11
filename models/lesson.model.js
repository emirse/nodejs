var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LessonSchema = Schema({
  lessonName: { type: String, require: true },
});
module.exports = mongoose.model("Lesson", LessonSchema);
