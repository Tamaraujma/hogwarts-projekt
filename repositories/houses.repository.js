import { pool } from "../db.js";

export async function getAllHouses() {
  const result = await pool.query("SELECT * FROM houses");
  return result.rows;
}

export async function getHouseById(id) {
  const result = await pool.query("SELECT * FROM houses WHERE id = $1", [id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

export async function createHouse(data) {
  const { name, color, founder } = data;

  const result = await pool.query("INSERT INTO houses (name, color, founder) VALUES ($1, $2, $3) RETURNING *", [name, color, founder]);
  return result.rows[0];
}

export async function updateHouse(id, data) {
  const { name, color, founder } = data;

  const result = await pool.query("UPDATE houses SET name = $1, color = $2, founder = $3 WHERE id = $4 RETURNING *", [name, color, founder, id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

export async function deleteHouse(id) {
  const result = await pool.query("DELETE FROM houses WHERE id = $1 RETURNING *", [id]);

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}
