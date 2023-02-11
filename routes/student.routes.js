const express = require("express");
const StudentSchema = require("../models/student.model");
const router = express.Router();

router.post("/", (req, res) => {
  const student = new StudentSchema({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    studentNumber: req.body.studentNumber,
  });
  student
    .save()
    .then(() => res.status(201).json({ message: "Student Created" }))
    .catch((err) => res.json(err.message));
});
router.get("/", (req, res) => {
  StudentSchema.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/:id", (req, res) => {
  StudentSchema.findById(req.params.id)
    .then((student) => {
      res.json(student);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
