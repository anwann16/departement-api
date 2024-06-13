import { Router } from "express";
import {
  createKaryawan,
  deleteKaryawan,
  getAllKaryawan,
  getSingleKaryawan,
  updateKaryawan,
} from "../controllers/karyawanController.js";

const karyawanRouter = Router();

karyawanRouter.get("/karyawan", getAllKaryawan);
karyawanRouter.get("/karyawan/:id", getSingleKaryawan);
karyawanRouter.put("/karyawan/:id", updateKaryawan);
karyawanRouter.post("/karyawan", createKaryawan);
karyawanRouter.delete("/karyawan/:id", deleteKaryawan);

export default karyawanRouter;
