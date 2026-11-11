import HTTPError from "../errorhandling.js/HTTPError.js";
import * as studentsRepository from "../repositories/students.repository.js";

export async function getAllStudents(req, res) {
  // try {
  const students = await studentsRepository.getAllStudents();
  if (!students) {
    throw new HTTPError(404, "Students not found");
  }
  res.status(200).json(students);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: "Database error" });
  // }
}

export async function getSingleStudent(req, res) {
  const id = req.params.id;
  const student = await studentsRepository.getStudentById(id);

  if (!student) {
    throw new HTTPError(404, "Student not found");
  }
  res.status(200).json(student);
}

export async function createStudent(req, res) {
  const newStudent = await studentsRepository.createStudent(req.body);
  res.status(201).json(newStudent);

  if (!newStudent) {
    throw new HTTPError(400, "Student not created");
  }
  res.status(201).json(newStudent);
}

export async function updateStudent(req, res) {
  const updatedStudent = await studentsRepository.updateStudent(req.params.id, req.body);

  if (!updatedStudent) {
    throw new HTTPError(404, "Student not found");
  }

  res.status(200).json(updatedStudent);
}

export async function deleteStudent(req, res) {
  const deleted = await studentsRepository.deleteStudent(req.params.id);

  if (!deleted) {
    throw new HTTPError(404, "Student does not exist");
  }

  res.sendStatus(204).json(deleted);
}
