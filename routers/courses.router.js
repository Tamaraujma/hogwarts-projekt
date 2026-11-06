import express from "express";
import * as coursesController from "../controllers/courses.controller.js";

const coursesRouter = express.Router();

coursesRouter.get("/courses", coursesController.getAllCourses);
coursesRouter.get("/courses/:id", coursesController.getSingleCourse);
coursesRouter.post("/courses", coursesController.createCourse);
coursesRouter.put("/courses/:id", coursesController.updateCourse);
coursesRouter.delete("/courses/:id", coursesController.deleteCourse);

coursesRouter.get("/courses/:courseId/students", coursesController.getCourseStudents);
coursesRouter.post("/courses/:courseId/students/:studentId", coursesController.addStudentToCourse);
coursesRouter.delete("/courses/:courseId/students/:studentId", coursesController.removeStudentFromCourse);

export default coursesRouter;
