const mongoose = require("mongoose");
const { Schema } = mongoose;

const ResultSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
      },
    result: {
        type: String,
        required: true,
    },
    puesto: {
        type: String,
        required: true,
    },
    affiliate: [{
        type: Schema.Types.ObjectId,
        ref: 'Afiliado',
    }],
    event: [{
        type: Schema.Types.ObjectId,
        ref: 'Evento',
    }],
});

module.exports = mongoose.model("results", EventSchema);