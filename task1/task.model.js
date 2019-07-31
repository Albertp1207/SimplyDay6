const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    text: {
        type: String,
        required:true
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        required:true
    },
    updated: {
        type: Date,
        required:false
    },
    userId: {
        type: String,
        required: false
    }
})


mongoose.model("tasks",TaskSchema);