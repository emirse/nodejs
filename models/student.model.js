var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StudentSchema = Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  studentNumber: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", StudentSchema);
