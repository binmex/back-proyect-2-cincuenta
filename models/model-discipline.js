const mongoose = require("mongoose");
const { Schema } = mongoose;

const DisciplineSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['individual', 'grupo'],
        required: true,
    },
    affiliates: [{
        type: Schema.Types.ObjectId,
        ref: 'Afiliado',
    }],
});

module.exports = mongoose.model("discipline", DisciplineSchema);
