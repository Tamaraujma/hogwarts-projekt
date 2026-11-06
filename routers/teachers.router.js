import express from "express";
import * as teachersController from "../controllers/teachers.controller.js";

const teachersRouter = express.Router();

teachersRouter.get("/teachers", teachersController.getAllTeachers);
teachersRouter.get("/teachers/:id", teachersController.getSingleTeacher);
teachersRouter.post("/teachers", teachersController.createTeacher);
teachersRouter.put("/teachers/:id", teachersController.updateTeacher);
teachersRouter.delete("/teachers/:id", teachersController.deleteTeacher);

export default teachersRouter;
