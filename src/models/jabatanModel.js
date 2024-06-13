import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import Departement from "./departementModel.js";

const Jabatan = sequelize.define(
  "Jabatan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_departement: {
      type: DataTypes.INTEGER,
      references: {
        model: "departements",
        key: "id",
      },
      allowNull: false,
      // onDelete: "CASCADE",
    },
    nama_jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "jabatan",
  }
);

Departement.hasMany(Jabatan, {
  foreignKey: "id_departement",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Jabatan.belongsTo(Departement, {
  foreignKey: "id_departement",
  onDelete: "CASCADE",
  onDelete: "CASCADE",
  hooks: true,
});

Jabatan.sync();

export default Jabatan;
