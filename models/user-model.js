const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    incidents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'incident',
        req: true
    }],

    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order',
        req: true
    }],

});
const user_model = mongoose.model('user', user_schema);

module.exports = user_model;