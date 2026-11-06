import * as studentsRepository from "../repositories/students.repository.js";

export async function getAllStudents(req, res) {
  try {
    const students = await studentsRepository.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function getSingleStudent(req, res) {
  try {
    const id = req.params.id;
    const student = await studentsRepository.getStudentById(id);

    if (!student) {
      return res.sendStatus(404);
    }

    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function createStudent(req, res) {
  try {
    const newStudent = await studentsRepository.createStudent(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function updateStudent(req, res) {
  try {
    const updatedStudent = await studentsRepository.updateStudent(req.params.id, req.body);

    if (!updatedStudent) {
      return res.sendStatus(404);
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function deleteStudent(req, res) {
  try {
    const deleted = await studentsRepository.deleteStudent(req.params.id);

    if (!deleted) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}
