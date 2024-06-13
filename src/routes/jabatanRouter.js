import { Router } from "express";
import {
  createJabatan,
  deleteJabatan,
  getAllJabatan,
  getSingleJabatan,
  updateJabatan,
} from "../controllers/jabatanController.js";

const jabatanRouter = Router();

jabatanRouter.get("/jabatan", getAllJabatan);
jabatanRouter.get("/jabatan/:id", getSingleJabatan);
jabatanRouter.post("/jabatan", createJabatan);
jabatanRouter.put("/jabatan/:id", updateJabatan);
jabatanRouter.delete("/jabatan/:id", deleteJabatan);

export default jabatanRouter;
