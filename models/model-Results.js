const mongoose = require("mongoose");
const { Schema } = mongoose;

const ResultSchema = new Schema({
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

module.exports = mongoose.model("result", ResultSchema);