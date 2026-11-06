import * as teachersRepository from "../repositories/teachers.repository.js";

export async function getAllTeachers(req, res) {
  try {
    const teachers = await teachersRepository.getAllTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function getSingleTeacher(req, res) {
  try {
    const id = req.params.id;
    const teacher = await teachersRepository.getTeacherById(id);

    if (!teacher) {
      return res.sendStatus(404);
    }

    res.status(200).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function createTeacher(req, res) {
  try {
    const newTeacher = await teachersRepository.createTeacher(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function updateTeacher(req, res) {
  try {
    const updatedTeacher = await teachersRepository.updateTeacher(req.params.id, req.body);

    if (!updatedTeacher) {
      return res.sendStatus(404);
    }

    res.status(200).json(updatedTeacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function deleteTeacher(req, res) {
  try {
    const deleted = await teachersRepository.deleteTeacher(req.params.id);

    if (!deleted) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}
