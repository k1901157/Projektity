const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incident_schema = new Schema({
    text: {
        type: String,
        required: true
    },
    /*ticketType: {
        type: String,
        required: true
    },*/
    incidentType:{
        type: String,
        required: false
    },
    /*orderType:{
        type: String,
        required: false
    },*/
    /*products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        req: true
    }]*/
});
const incident_model = new mongoose.model('incident', incident_schema);

module.exports = incident_model;