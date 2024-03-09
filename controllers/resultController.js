const Result = require("../models/model-Results");

const Afiliado = require("../models/model-affiliate");
const Evento = require("../models/model-events");



exports.save = async (req, res) => {
  
  const { events , affiliates} = req.body;
  const eventoId = events._id;
  const afiliadoId = affiliates._id;

   try {
    
    const afiliado = await Afiliado.findById(afiliadoId);
    if (!afiliado) {
      return res.status(404).json({ state: false, error: "Afiliado no existe" });
    }

   
    const evento = await Evento.findById(eventoId);
    if (!evento) {
      return res.status(404).json({ state: false, error: "Evento no existe" });
    }

    const existeResultado = await Result.findOne({ affiliates: afiliadoId, events: eventoId });

    
    if (existeResultado) {
      return res.status(400).json({ state: false, error: "Ya existe un resultado para este afiliado y evento" });
    }
    console.log("esto",afiliado, evento, afiliadoId, eventoId, "exi", existeResultado)

   
    const nuevoResultado = new Result(req.body);

        nuevoResultado.afiliado = afiliado;
    nuevoResultado.evento = evento;

        const resultadoGuardado = await nuevoResultado.save();


    return res.status(200).json({ state: true, data: resultadoGuardado });
  } catch (error) {
    return res.status(500).json({ state: false, error: error.message });
  }
};



exports.update = async (req, res) => {
  const { id } = req.params;
  const updateInformation = req.body;
  
  try {
    const data = await Result.updateOne({ id: id }, { $set: updateInformation });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Result.find({});
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.findId = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Result.findById(id);
        if (!event) {
        return res
            .status(404)
            .json({ state: false, message: "no encontrado" });
        }
        return res.status(200).json({ state: true, data: event });

    } catch (err) {
        return res.status(500).json({ state: false, error: error.message });

    }
};
exports.findById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const data = await Result.find({ id: id });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.deleteResult = async (req, res) => {
  const { id } = req.params;
  
  try {
    const data = await Result.deleteOne({ id: id });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};
