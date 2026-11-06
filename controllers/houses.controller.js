import * as housesRepository from "../repositories/houses.repository.js";

export const getAllHouses = async (req, res) => {
  try {
    const allHouses = await housesRepository.getAllHouses();
    res.json(allHouses);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
};

export async function getSingleHouse(req, res) {
  try {
    const id = req.params.id;
    const house = await housesRepository.getHouseById(id);

    if (house) {
      return res.status(200).json(house);
    }

    return res.sendStatus(404);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function createHouse(req, res) {
  try {
    const newHouse = await housesRepository.createHouse(req.body);
    res.status(201).json(newHouse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function updateHouse(req, res) {
  try {
    const updatedHouse = await housesRepository.updateHouse(req.params.id, req.body);

    if (!updatedHouse) {
      return res.sendStatus(404);
    }

    res.status(200).json(updatedHouse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}

export async function deleteHouse(req, res) {
  try {
    const deleted = await housesRepository.deleteHouse(req.params.id);

    if (!deleted) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}
