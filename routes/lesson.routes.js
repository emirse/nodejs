const express = require("express");
const LessonSchema = require("../models/lesson.model");
const router = express.Router();

router.post("/", (req, res) => {
  const lesson = new LessonSchema({
    lessonName: req.body.lessonName,
  });
  lesson
    .save()
    .then(() => res.status(201).json({ message: "Lesson Created" }))
    .catch((err) => res.json(err.message));
});
router.get("/", (req, res) => {
  LessonSchema.find()
    .then((lessons) => {
      res.json(lessons);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/:id", (req, res) => {
  LessonSchema.findById(req.params.id)
    .then((lesson) => {
      res.json(lesson);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
