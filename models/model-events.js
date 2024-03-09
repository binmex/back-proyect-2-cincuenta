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
        
    results: { 
        type: ResultSchema,
        required: true,
      },
    
});

module.exports = mongoose.model("event", EventSchema);
