import express from "express";
import { pool } from "./db.js";

import housesRouter from "./routers/houses.router.js";
import teachersRouter from "./routers/teachers.router.js";
import studentsRouter from "./routers/students.router.js";
import coursesRouter from "./routers/courses.router.js";
import errorhandler from "./errorhandling.js/errohandler.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(housesRouter);
app.use(teachersRouter);
app.use(studentsRouter);
app.use(coursesRouter);
app.use(errorhandler);

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: "Something went wrong",
//     error: "Internal Server Error",
//     statusCode: 500,
//   });
// });

app.get("/", (req, res) => {
  res.send("Hello, Hogwarts!");
});

console.log("Hello");

app.listen(port, () => {
  console.log(`Server kører på http://localhost:${port}`);
});
