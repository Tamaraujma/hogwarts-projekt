import * as coursesRepository from "../repositories/courses.repository.js";

export async function getAllCourses(req, res) {
  try {
    const courses = await coursesRepository.getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function getSingleCourse(req, res) {
  try {
    const id = req.params.id;
    const course = await coursesRepository.getCourseById(id);

    if (!course) {
      return res.sendStatus(404);
    }

    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function createCourse(req, res) {
  try {
    const newCourse = await coursesRepository.createCourse(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function updateCourse(req, res) {
  try {
    const updatedCourse = await coursesRepository.updateCourse(req.params.id, req.body);

    if (!updatedCourse) {
      return res.sendStatus(404);
    }

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function deleteCourse(req, res) {
  try {
    const deleted = await coursesRepository.deleteCourse(req.params.id);

    if (!deleted) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function getCourseStudents(req, res) {
  try {
    const courseId = req.params.courseId;
    const students = await coursesRepository.getStudentsForCourse(courseId);
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function addStudentToCourse(req, res) {
  try {
    const courseId = req.params.courseId;
    const studentId = req.params.studentId;

    const relation = await coursesRepository.addStudentToCourse(courseId, studentId);
    res.status(201).json(relation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function removeStudentFromCourse(req, res) {
  try {
    const courseId = req.params.courseId;
    const studentId = req.params.studentId;

    const deleted = await coursesRepository.removeStudentFromCourse(courseId, studentId);

    if (!deleted) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}
