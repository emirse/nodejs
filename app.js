const express = require("express");
const { default: client } = require("./db/db");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

//routes
const studentRoute = require("./routes/student.routes");
const lessonRoute = require("./routes/lesson.routes");
const homeworkRoute = require("./routes/homework.routes");

app.use("/api/student", studentRoute);
app.use("/api/lesson", lessonRoute);
app.use("/api/homework", homeworkRoute);

app.listen(3000);
