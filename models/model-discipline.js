const mongoose = require("mongoose");
const { Schema } = mongoose;

const DisciplineSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Individual", "Grupal"],
    required: true,
  },
  affiliates: [
    {
      type: Schema.Types.ObjectId,
      ref: "affiliate",
    },
  ],
});

module.exports = mongoose.model("discipline", DisciplineSchema);
