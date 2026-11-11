import * as coursesRepository from "../repositories/courses.repository.js";
import HTTPError from "../errorhandling.js/HTTPError.js";

export async function getAllCourses(req, res) {
  // try {
  const courses = await coursesRepository.getAllCourses();

  if (!courses) {
    throw new HTTPError(404, "Courses not found");
  }
  res.status(200).json(courses);

  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: "Database error" });
  // }
}

export async function getSingleCourse(req, res) {
  const id = req.params.id;
  const course = await coursesRepository.getCourseById(id);

  if (!course) {
    throw new HTTPError(404, "Course not found");
  }

  res.status(200).json(course);
}

export async function createCourse(req, res) {
  const newCourse = await coursesRepository.createCourse(req.body);

  if (!newCourse) {
    throw new HTTPError(400, "Course not created");
  }
  res.status(201).json(newCourse);
}

export async function updateCourse(req, res) {
  const updatedCourse = await coursesRepository.updateCourse(req.params.id, req.body);

  if (!updatedCourse) {
    throw new HTTPError(404, "Course not found");
  }

  res.status(200).json(updatedCourse);
}

export async function deleteCourse(req, res) {
  const deleted = await coursesRepository.deleteCourse(req.params.id);

  if (!deleted) {
    throw new HTTPError(404, "Course not found");
  }

  res.status(204).json(deleted);
}

export async function getCourseStudents(req, res) {
  const courseId = req.params.courseId;
  const students = await coursesRepository.getStudentsForCourse(courseId);

  if (!students) {
    throw new HTTPError(404, "Students not found for this course");
  }
  res.status(200).json(students);
}

export async function addStudentToCourse(req, res) {
  const courseId = req.params.courseId;
  const studentId = req.params.studentId;

  const relation = await coursesRepository.addStudentToCourse(courseId, studentId);
  if (!relation) {
    throw new HTTPError(400, "Student could not be added to course");
  }
  res.status(201).json(relation);
}

export async function removeStudentFromCourse(req, res) {
  const courseId = req.params.courseId;
  const studentId = req.params.studentId;

  const deleted = await coursesRepository.removeStudentFromCourse(courseId, studentId);

  if (!deleted) {
    throw new HTTPError(404, "Student not found in this course");
  }

  res.sendStatus(204).json(deleted);
}
