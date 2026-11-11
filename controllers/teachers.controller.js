import * as teachersRepository from "../repositories/teachers.repository.js";
import HTTPError from "../errorhandling.js/HTTPError.js";

export async function getAllTeachers(req, res) {
  // try {
  const teachers = await teachersRepository.getAllTeachers();
  if (!teachers) {
    throw new HTTPError(404, "Teachers not found");
  }
  res.status(200).json(teachers);

  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: "Database error" });
  // }
}

export async function getSingleTeacher(req, res) {
  const id = req.params.id;
  const teacher = await teachersRepository.getTeacherById(id);

  if (!teacher) {
    throw new HTTPError(404, "Teacher not found");
  }
  res.status(200).json(teacher);
}

export async function createTeacher(req, res) {
  const newTeacher = await teachersRepository.createTeacher(req.body);
  if (!newTeacher) {
    throw new HTTPError(400, "Teacher not created");
  }
  res.status(201).json(newTeacher);
}

export async function updateTeacher(req, res) {
  const updatedTeacher = await teachersRepository.updateTeacher(req.params.id, req.body);

  if (!updatedTeacher) {
    throw new HTTPError(404, "Teacher not found");
  }

  res.status(200).json(updatedTeacher);
}

export async function deleteTeacher(req, res) {
  const deleted = await teachersRepository.deleteTeacher(req.params.id);

  if (!deleted) {
    throw new HTTPError(404, "Teacher does not exist");
  }

  res.sendStatus(204).json(deleted);
}
