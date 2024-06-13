import Departement from "../models/departementModel.js";
import Jabatan from "../models/jabatanModel.js";
import karyawan from "../models/karyawanModel.js";

export const createKaryawan = async (req, res) => {
  try {
    const { name, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "name is required",
      });
    }

    const newKaryawan = await karyawan.create({
      name,
      id_jabatan,
      age,
      gender,
      tanggal_lahir: new Date(tanggal_lahir),
      alamat,
    });

    res.status(201).json({
      message: "create karyawan successfully",
      payload: newKaryawan,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const getAllKaryawan = async (req, res) => {
  try {
    const allKaryawan = await karyawan.findAll({
      include: {
        model: Jabatan,
        include: {
          model: Departement,
        },
      },
    });

    res.status(200).json({
      message: "successfully get karyawan",
      payload: allKaryawan,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const getSingleKaryawan = async (req, res) => {
  try {
    const { id } = req.params;

    const karyawanFound = await karyawan.findByPk(id, {
      include: {
        model: Jabatan,
        include: {
          model: Departement,
        },
      },
    });

    if (!karyawanFound) {
      return res.status(404).json({
        message: "karyawan not found",
      });
    }

    res.status(200).json({
      message: "successfully get karyawan",
      payload: karyawanFound,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const updateKaryawan = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body;

    const karyawanFound = await karyawan.findByPk(id, {
      include: {
        model: Jabatan,
        include: {
          model: Departement,
        },
      },
    });
    if (!karyawanFound) {
      return res.status(404).json({
        message: "karyawan not found",
      });
    }

    await karyawan.update(
      {
        name: name || karyawanFound.name,
        id_jabatan: id_jabatan || karyawanFound.id_jabatan,
        age: age || karyawanFound.age,
        gender: gender || karyawanFound.gender,
        tanggal_lahir: tanggal_lahir || karyawanFound.tanggal_lahir,
        alamat: alamat || karyawanFound.alamat,
      },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({
      message: "successfully updated karyawan",
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteKaryawan = async (req, res) => {
  try {
    const { id } = req.params;

    const karyawanFound = await karyawan.findByPk(id);

    if (!karyawanFound) {
      return res.status(404).json({
        message: "karyawan not found",
      });
    }

    await karyawan.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({
      message: "Karyawan succesfully deleted!",
    });
  } catch (err) {
    throw new Error(err);
  }
};
