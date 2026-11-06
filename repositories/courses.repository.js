import { pool } from "../db.js";

export async function getAllCourses() {
  const result = await pool.query("SELECT * FROM courses");
  return result.rows;
}

export async function getCourseById(id) {
  const result = await pool.query("SELECT * FROM courses WHERE id = $1", [id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

export async function createCourse(data) {
  const { name, teacher } = data;

  const result = await pool.query("INSERT INTO courses (name, teacher) VALUES ($1, $2) RETURNING *", [name, teacher]);
  return result.rows[0];
}

export async function updateCourse(id, data) {
  const { name, teacher } = data;

  const result = await pool.query("UPDATE courses SET name = $1, teacher = $2 WHERE id = $3 RETURNING *", [name, teacher, id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

export async function deleteCourse(id) {
  const result = await pool.query("DELETE FROM courses WHERE id = $1 RETURNING *", [id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

export async function getStudentsForCourse(courseId) {
  const result = await pool.query(
    `SELECT s.*
     FROM course_students cs
     JOIN students s ON cs.student_id = s.id
     WHERE cs.course_id = $1
     ORDER BY s.id`,
    [courseId]
  );

  return result.rows;
}

export async function addStudentToCourse(courseId, studentId) {
  const result = await pool.query(
    "INSERT INTO course_students (course_id, student_id) VALUES ($1, $2) RETURNING *",
    [courseId, studentId]
  );

  return result.rows[0];
}

export async function removeStudentFromCourse(courseId, studentId) {
  const result = await pool.query(
    "DELETE FROM course_students WHERE course_id = $1 AND student_id = $2 RETURNING *",
    [courseId, studentId]
  );

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}
