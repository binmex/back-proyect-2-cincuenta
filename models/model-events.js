const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
      },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    result: {
        type: String,
        required: true,
    },
    affiliate: [{
        type: Schema.Types.ObjectId,
        ref: 'Afiliado',
    }],
    
});

module.exports = mongoose.model("event", EventSchema);
