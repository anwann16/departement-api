import Departement from "../models/departementModel.js";
import jabatan from "../models/jabatanModel.js";

export const createJabatan = async (req, res) => {
  try {
    const { id_departement, nama_jabatan } = req.body;

    if (!nama_jabatan) {
      return res.status(400).json({
        message: "name is required",
      });
    }

    const newJabatan = await jabatan.create({
      id_departement,
      nama_jabatan,
    });

    res.status(201).json({
      message: "Jabatan successfully created",
      payload: newJabatan,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const getAllJabatan = async (req, res) => {
  try {
    const allJabatan = await jabatan.findAll({
      include: {
        model: Departement,
      },
    });

    res.status(200).json({
      message: "Successfully get all jabatan",
      payload: allJabatan,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const getSingleJabatan = async (req, res) => {
  try {
    const { id } = req.params;

    const jabatanFound = await jabatan.findByPk(id, {
      include: {
        model: Departement,
      },
    });
    if (!jabatanFound) {
      return res.status(404).json({
        message: "jabatan not found",
      });
    }

    res.status(200).json({
      message: "successfully get jabatan",
      payload: jabatanFound,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const updateJabatan = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_departement, nama_jabatan } = req.body;

    const jabatanFound = await jabatan.findByPk(id);
    if (!jabatanFound) {
      return res.status(404).json({
        message: "jabatan not found",
      });
    }

    await jabatan.update(
      {
        id_departement: id_departement || jabatanFound.id_departement,
        nama_jabatan: nama_jabatan || jabatanFound.nama_jabatan,
      },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({
      message: "jabatan successfully updated!",
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteJabatan = async (req, res) => {
  try {
    const { id } = req.params;

    const jabatanFound = await jabatan.findByPk(id);
    if (!jabatanFound) {
      return res.status(404).json({
        message: "jabatan not found",
      });
    }

    await jabatan.destroy({
      where: { id },
    });

    res.status(200).json({
      message: "jabatan successfully deleted",
    });
  } catch (err) {
    throw new Error(err);
  }
};
