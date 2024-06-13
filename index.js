import cors from "cors";
import express from "express";

import jabatanRouter from "./src/routes/jabatanRouter.js";
import karyawanRouter from "./src/routes/karyawanRouter.js";
import departementRouter from "./src/routes/departementRouter.js";

import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", departementRouter);
app.use("/api", jabatanRouter);
app.use("/api", karyawanRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
