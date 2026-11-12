import { pool } from "../db.js";

export async function getAllTeachers() {
  const result = await pool.query(/*SQL*/ `select teachers.id, teachers.name, houses.name as house from teachers full join houses on teachers.house_id = houses.id`);
  return result.rows;
}

export async function getTeacherById(id) {
  const result = await pool.query(
    /*SQL*/ `select teachers.id, teachers.name, houses.name as house from teachers 
    full JOIN houses
    ON teachers.house_id = houses.id WHERE teachers.id = $1`,
    [id],
  );

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

export async function createTeacher(data) {
  const { name, house } = data;

  const result = await pool.query("INSERT INTO teachers (name, house) VALUES ($1, $2) RETURNING *", [name, house]);
  return result.rows[0];
}

export async function updateTeacher(id, data) {
  const { name, house } = data;

  const result = await pool.query("UPDATE teachers SET name = $1, house = $2 WHERE id = $3 RETURNING *", [name, house, id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

export async function deleteTeacher(id) {
  const result = await pool.query("DELETE FROM teachers WHERE id = $1 RETURNING *", [id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}
