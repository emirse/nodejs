var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StudentSchema = Schema({
  firstName: {
    type: String,
    required: [true, "'{PATH}' alanı boş geçilemez."],
  },
  lastName: { type: String, required: [true, "'{PATH}' alanı boş geçilemez."] },
  studentNumber: {
    type: String,
    required: [true, "'{PATH}' alanı boş geçilemez."],
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", StudentSchema);
