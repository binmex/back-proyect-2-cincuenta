const Event = require("../models/model-events");

exports.findAll = async (req, res) => {
  try {
    const events = await Event.find({}).populate("result");
    return res.status(200).json({ state: true, data: events });
  } catch (error) {
    return res.status(500).json({ state: false, error: error.message });
  }
};

exports.findById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id).populate("result");
    if (!event) {
      return res
        .status(404)
        .json({ state: false, message: "Evento no encontrado" });
    }
    return res.status(200).json({ state: true, data: event });
  } catch (error) {
    return res.status(500).json({ state: false, error: error.message });
  }
};

exports.save = async (req, res) => {
  try {
    const newEvent = new Event(req.body);

    // Validar que los campos no estén vacíos
    const requiredFields = ["name", "date"];
    for (const field of requiredFields) {
      if (!newEvent[field]) {
        return res
          .status(400)
          .json({ state: false, message: `${field} no puede estar vacío` });
      }
    }

    // Validar que la fecha proporcionada sea válida
    const date = new Date(newEvent.date);
    if (isNaN(date.getDate())) {
      return res
        .status(400)
        .json({ state: false, message: "La fecha proporcionada no es válida" });
    }

    const data = await newEvent.save();
    return res.status(200).json({ state: true, data: data });
  } catch (error) {
    return res.status(500).json({ state: false, error: error.message });
  }
};

exports.drop = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Event.deleteOne({ _id: id });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updateInformation = req.body;

  // Validar que no se esté intentando actualizar el id
  if (updateInformation.id) {
    return res
      .status(400)
      .json({ state: false, message: "No se puede actualizar el campo id" });
  }

  // Validar que los campos no estén vacíos
  const requiredFields = ["name", "date"];
  for (const field of requiredFields) {
    if (!updateInformation[field]) {
      return res
        .status(400)
        .json({ state: false, message: `${field} no puede estar vacío` });
    }
  }

  // Validar que la fecha proporcionada sea válida
  const date = new Date(updateInformation.date);
  if (isNaN(date.getDate())) {
    return res
      .status(400)
      .json({ state: false, message: "La fecha proporcionada no es válida" });
  }

  // Eliminar el campo "result" del objeto de actualización si está presente
  delete updateInformation.result;

  try {
    const data = await Event.updateOne(
      { _id: id },
      { $set: updateInformation }
    );
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};
