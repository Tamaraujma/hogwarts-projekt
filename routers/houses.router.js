import express from "express";
import * as housesController from "../controllers/houses.controller.js";

//HOUSES
const housesRouter = express.Router();
//houses R all - Get all houses
housesRouter.get("/houses", housesController.getAllHouses);

// houses R id - Get single house ID
housesRouter.get("/houses/:id", housesController.getSingleHouse);
housesRouter.post("/houses", housesController.createHouse);
housesRouter.put("/houses/:id", housesController.updateHouse);
housesRouter.delete("/houses/:id", housesController.deleteHouse);

export default housesRouter;
