import HTTPError from "../errorhandling.js/HTTPError.js";
import * as housesRepository from "../repositories/houses.repository.js";

export const getAllHouses = async (req, res) => {
  // try {
  const allHouses = await housesRepository.getAllHouses();

  if (!allHouses) {
    throw new HTTPError(404, "Houses not found");
  }
  return res.status(200).json(allHouses);

  // } catch (err) {
  //   console.error(err);
  //   res.status(500).send("Database error");
  // }
};

export async function getSingleHouse(req, res) {
  const id = req.params.id;
  const house = await housesRepository.getHouseById(id);

  if (!house) {
    throw new HTTPError(404, "House not found");
  }
  return res.status(200).json(house);
}

export async function createHouse(req, res) {
  const newHouse = await housesRepository.createHouse(req.body);

  if (!newHouse) {
    throw new HTTPError(400, "House not created");
  }
  res.status(201).json(newHouse);
}

export async function updateHouse(req, res) {
  const updatedHouse = await housesRepository.updateHouse(req.params.id, req.body);

  if (!updatedHouse) {
    throw new HTTPError(404, "House not found");
  }

  res.status(200).json(updatedHouse);
}

export async function deleteHouse(req, res) {
  const deleted = await housesRepository.deleteHouse(req.params.id);

  if (!deleted) {
    throw new HTTPError(404, "House not found");
  }

  return res.status(204).json(deleted);
}
