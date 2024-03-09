const mongoose = require("mongoose");
const { Schema } = mongoose;

const AfiliadoSchema = new Schema({
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    celphone: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    discipline: { 
      type: Schema.Types.ObjectId,
      ref: "discipline"
    },
    result: { 
      type: Schema.Types.ObjectId,
      ref: "result"
    },
   
  });
  
  module.exports = mongoose.model("affiliate", AfiliadoSchema);