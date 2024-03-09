const Event = require("../models/model-events");

exports.findAll = async (req, res) => {
  try {
    const events = await Event.find({});
    return res.status(200).json({ state: true, data: events });
  } catch (error) {
    return res.status(500).json({ state: false, error: error.message });
  }
};

exports.findById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
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
    const event = new Event(req.body);

    return res.status(200).json({ state: true, data: event });
  } catch (error) {
    return res.status(500).json({ state: false, error: error.message });
  }
};

exports.drop = async (req, res) => {
  const { idEvent } = req.params;
  try {
    const deletedEvent = await Event.findByIdAndDelete(idEvent);
    if (!deletedEvent) {
      return res
        .status(404)
        .json({ state: false, message: "Evento no encontrado" });
    }
    return res.status(200).json({ state: true, data: deletedEvent });
  } catch (error) {
    return res.status(500).json({ state: false, error: error.message });
  }
};

exports.update = async (req, res) => {
  const { idEvent } = req.params;
  const { id, name, date, result } = req.body;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      idEvent,
      { id: id, name: name, date: date, result: result },
      { new: true }
    );
    if (!updatedEvent) {
      return res
        .status(404)
        .json({ state: false, message: "Evento no encontrado" });
    }
    return res.status(200).json({ state: true, data: updatedEvent });
  } catch (error) {
    return res.status(500).json({ state: false, error: error.message });
  }
};
