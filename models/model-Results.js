const mongoose = require("mongoose");
const { Schema } = mongoose;

const ResultSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
      },
    puesto: {
        type: String,
        required: true,
    },
    affiliates: [{
        type: Schema.Types.ObjectId,
        ref: 'affiliate',
    }],
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'event',
    }],
    
});

module.exports = mongoose.model("result", ResultSchema);