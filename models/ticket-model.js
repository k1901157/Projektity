const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticket_schema = new Schema({
    text: {
        type: String,
        required: true
    },
    incidentType: {
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
    /*products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        req: true
    }]*/
});
const ticket_model = new mongoose.model('ticket', ticket_schema);

module.exports = ticket_model;