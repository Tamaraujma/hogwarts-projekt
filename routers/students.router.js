import express from "express";
import * as studentsController from "../controllers/students.controller.js";

const studentsRouter = express.Router();

studentsRouter.get("/students", studentsController.getAllStudents);
studentsRouter.get("/students/:id", studentsController.getSingleStudent);
studentsRouter.post("/students", studentsController.createStudent);
studentsRouter.put("/students/:id", studentsController.updateStudent);
studentsRouter.delete("/students/:id", studentsController.deleteStudent);

export default studentsRouter;
