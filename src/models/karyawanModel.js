import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import Jabatan from "./jabatanModel.js";

const Karyawan = sequelize.define(
  "Karyawan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_jabatan: {
      type: DataTypes.INTEGER,
      references: {
        model: "jabatan",
        key: "id",
      },
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
    },
    alamat: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "karyawan",
  }
);

Karyawan.sync();

Jabatan.hasMany(Karyawan, { foreignKey: "id_jabatan" });
Karyawan.belongsTo(Jabatan, { foreignKey: "id_jabatan" });

export default Karyawan;
