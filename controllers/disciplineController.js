const Discipline = require("../models/model-discipline");
const Affiliate = require("../models/model-affiliate");

exports.save = async (req, res) => {
  const newDiscipline = new Discipline(req.body);
  try {
    const data = await newDiscipline.save();
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const updateInformation = req.body;  
    try {
      const data = await Discipline.updateOne(
        { id: id },
        { $set: updateInformation }
      );
      res.status(200).json({ state: true, data: data });
    } catch (err) {
      res.status(500).json({ state: false, error: err.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const data = await Discipline.find({}).populate("affiliates");
        res.status(200).json({ state: true, data: data });
      } catch (err) {
        res.status(500).json({ state: false, error: err.message });
      }
};

exports.findById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await Discipline.findById(id);
      res.status(200).json({ state: true, data: data });
    } catch (err) {
      res.status(500).json({ state: false, error: err.message });
    }
};

exports.findId = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await Discipline.find({ id: id }).populate("affiliates");
      res.status(200).json({ state: true, data: data });
    } catch (err) {
      res.status(500).json({ state: false, error: err.message });
    }
};

exports.deleteDiscipline = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await Discipline.deleteOne({ _id: id });
      const data2 = await Affiliate.deleteMany({ 'discipline': id });
      res.status(200).json({ state: true, data: data, data2: data2});
    } catch (err) {
      res.status(500).json({ state: false, error: err.message });
    }
};
