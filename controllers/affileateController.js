const Afiliado = require("../models/model-affiliate");
const Results = require("../models/model-Results");
const Discipline = require("../models/model-discipline");





    //  // Agregar reserva al cliente
    // //  await client.save(); // Guardar el cliente actualizado


    //  const newAfiliado = new Afiliado(req.body);
    //  Discipline.affiliates.push(newAfiliado);
    // //  await client.save()


    // //  afiliado.resultados.push(nuevoResultado);
    // //  await afiliado.save();

    // //  evento.resultados.push(nuevoResultado);
    // //  await evento.save();




    // // const newAfiliado = new Afiliado(req.body);
    // await Discipline.save();
    // const data = await newAfiliado.save();


    createReservation: async (_, args) => {
      try {
        const {
          id,
          bookingStartDate,
          bookingEndDate,
          service,
          comments,
          idClient,
        } = args;
        const client = await Client.findOne({ id: idClient });
        if (!client) {
          throw new Error("Cliente no encontrado");
        }
        const reservation = new Reservation({
          id,
          bookingStartDate,
          bookingEndDate,
          service,
          comments,
          client: client._id,
        });
        //console.log(reservation);
        await reservation.save();
        client.reservations.push(reservation); // Agregar reserva al cliente
        await client.save(); // Guardar el cliente actualizado
        return reservation;
      } catch (error) {
        throw new Error("Error al crear la reserva: " + error.message);
      }
    },

exports.save = async (req, res) => {
  try {
    
    const { discipline} = req.body;
    const idDisci = discipline._id
    
    const disciplina = await Discipline.findById( idDisci );
    if (!disciplina) {
      return res.status(404).json({ state: false, error: "disciplina no existe" });
    }   

    const newAfiliado = new Afiliado(req.body);
    const data = await newAfiliado.save();

    disciplina.affiliates.push(newAfiliado);
    await disciplina.save();

    
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updateInformation = req.body;
  
  try {
    const data = await Afiliado.updateOne({ id: id }, { $set: updateInformation });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Afiliado.find({}).populate("discipline");
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};


exports.findById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Afiliado.findById(id);
    if (!event) {
      return res
        .status(404)
        .json({ state: false, message: "no encontrado" });
    }
    return res.status(200).json({ state: true, data: event });
  } catch (error) {
    return res.status(500).json({ state: false, error: error.message });
  }
};

exports.findId = async (req, res) => {
  const { id } = req.params;
  
  try {
    const data = await Afiliado.find({ id: id });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};


exports.deleteAfiliado = async (req, res) => {
  const { id } = req.params;
  
  try {
    const data = await Afiliado.deleteOne({ id: id });
    // const data2 = await Results.deleteMany({ 'result': id });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

