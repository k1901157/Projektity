const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order_schema = new Schema({
    text: {
        type: String,
        required: false
    },
    ticketType: {
        type: String,
        required: true
    },
    incidentType:{
        type: String,
        required: false
    },
    orderType:{
        type: String,
        required: false
    },

});
const order_model = new mongoose.model('order', order_schema);

module.exports = order_model;