import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Departement = sequelize.define(
  "Departement",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_departement: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "departements",
  }
);

Departement.sync();

export default Departement;
