import departement from "../models/departementModel.js";

export const createDepartement = async (req, res) => {
  try {
    const { nama_departement } = req.body;

    if (!nama_departement) {
      return res.status(400).json({
        message: "name_departement is required",
      });
    }

    const newDepartement = await departement.create({ nama_departement });

    res.status(201).json({
      message: "departement successfully created!",
      payload: newDepartement,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const getDepartements = async (req, res) => {
  try {
    const departements = await departement.findAll();

    res.status(200).json({
      message: "successfully get all departements!",
      payload: departements,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const getSingleDepartement = async (req, res) => {
  try {
    const { id } = req.params;
    const departementFound = await departement.findByPk(id);

    if (!departementFound) {
      return res.status(404).json({
        message: "departement not found",
      });
    }

    res.status(200).json({
      message: "successfully get departement",
      payload: departementFound,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const updateDepartement = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama_departement } = req.body;

    const departementFound = await departement.findByPk(id);

    if (!departementFound) {
      return res.status(404).json({
        message: "departement not found",
      });
    }

    await departement.update(
      {
        nama_departement: nama_departement || departementFound.nama_departement,
      },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({
      message: "departement sucessfully updated",
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteDepartement = async (req, res) => {
  try {
    const { id } = req.params;

    const departementFound = await departement.findByPk(id);

    if (!departementFound) {
      return res.status(404).json({
        message: "departement not found",
      });
    }

    await departement.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({
      message: "departement successfully deleted",
    });
  } catch (err) {
    throw new Error(err);
  }
};
