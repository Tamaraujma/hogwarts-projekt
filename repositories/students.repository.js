import { pool } from "../db.js";

export async function getAllStudents() {
  const result = await pool.query("SELECT * FROM students");
  return result.rows;
}

export async function getStudentById(id) {
  const result = await pool.query("SELECT * FROM students WHERE id = $1", [id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

export async function createStudent(data) {
  const { name, house, year } = data;

  const result = await pool.query("INSERT INTO students (name, house, year) VALUES ($1, $2, $3) RETURNING *", [name, house, year]);
  return result.rows[0];
}

export async function updateStudent(id, data) {
  const { name, house, year } = data;

  const result = await pool.query("UPDATE students SET name = $1, house = $2, year = $3 WHERE id = $4 RETURNING *", [name, house, year, id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

export async function deleteStudent(id) {
  const result = await pool.query("DELETE FROM students WHERE id = $1 RETURNING *", [id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}
