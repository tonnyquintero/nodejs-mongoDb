const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        require: true,
    },
    date: Date,
    file: Schema.Types.String,
});

const model = mongoose.model('Message', mySchema);


module.exports = model;