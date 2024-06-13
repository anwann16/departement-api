import { Router } from "express";
import {
  createDepartement,
  deleteDepartement,
  getDepartements,
  getSingleDepartement,
  updateDepartement,
} from "../controllers/departementController.js";

const departementRouter = Router();

departementRouter.post("/departement", createDepartement);
departementRouter.get("/departements", getDepartements);
departementRouter.get("/departement/:id", getSingleDepartement);
departementRouter.put("/departement/:id", updateDepartement);
departementRouter.delete("/departement/:id", deleteDepartement);

export default departementRouter;
