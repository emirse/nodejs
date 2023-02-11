const express = require("express");
const HomeworkSchema = require("../models/homework.model");
const router = express.Router();

router.post("/", (req, res) => {
  const homework = new HomeworkSchema({
    homework: req.body.homework,
    student: req.body.student,
    lesson: req.body.lesson,
    score: req.body.score,
  });
  homework
    .save()
    .then(() => res.status(201).json({ message: "Homework Created" }))
    .catch((err) => res.json(err.message));
});
router.get("/", (req, res) => {
  HomeworkSchema.find()
    .then((homework) => {
      res.json(homework);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/:id", (req, res) => {
  HomeworkSchema.findById(req.params.id)
    .then((homework) => {
      res.json(homework);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
