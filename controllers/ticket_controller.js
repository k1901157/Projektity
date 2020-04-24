const incident_model = require('../models/incident-model');
const incident_views = require('../views/incident-views');
//const product_model = require('../models/product-model');
//const product_views = require('../views/product-views');
const order_model = require('../models/order-model');
const order_views = require('../views/order-views');

const home_view = require('../views/home-views');

const get_home =  (req, res, next) => {
    const user = req.user;
    user.populate()
        .execPopulate()
        .then(() => {
            console.log('user:', user);
            let data = {
                user_name: user.name,
               // tickets: user.tickets
            };
            let html = home_view.home_view(data)
            res.send(html);
        });
};

const get_incidents =  (req, res, next) => {
    const user = req.user;
    user.populate('incidents')
        .execPopulate()
        .then(() => {
            console.log('user:', user);
            let data = {
                user_name: user.name,
                incidents: user.incidents
            };
            let html = incident_views.incidents_view(data)
            res.send(html);
        });
};

const post_incident = (req, res, next) => {
    const user = req.user;
    let new_incident = incident_model({
        text: req.body.incident,
        //ticketType: req.body.ticketType,
        incidentType: req.body.incidentType,
        //orderType: req.body.orderType,
    });
    new_incident.save().then(() => {
        console.log('incident saved');
        user.incidents.push(new_incident);
        user.save().then(() => {
            return res.redirect('/incidents');
        });
    });
};

const post_delete_incident = (req, res, next) => {
    const user = req.user;
    const incident_id_to_delete = req.body.incident_id;

    //Remove ticket from user.tickets
    const updated_incidents = user.incidents.filter((incident_id) => {
        return incident_id != incident_id_to_delete;
    });
    user.incidents = updated_incidents;

    //Remove ticket object from database
    user.save().then(() => {
        incident_model.findByIdAndRemove(incident_id_to_delete).then(() => {
            res.redirect('/incidents');
        });
    });
};

const get_orders =  (req, res, next) => {
    const user = req.user;
    user.populate('orders')
        .execPopulate()
        .then(() => {
            console.log('user:', user);
            let data = {
                user_name: user.name,
                orders: user.orders
            };
            let html = order_views.orders_view(data)
            res.send(html);
        });
};

const post_order = (req, res, next) => {
    const user = req.user;
    let new_order = order_model({
        text: req.body.order,
        ticketType: req.body.orderType,
        incidentType: req.body.incidentType,
        orderType: req.body.orderType,
    });
    new_order.save().then(() => {
        console.log('order saved');
        user.orders.push(new_order);
        user.save().then(() => {
            return res.redirect('/orders');
        });
    });
};

const post_delete_order = (req, res, next) => {
    const user = req.user;
    const order_id_to_delete = req.body.order_id;

    //Remove ticket from user.tickets
    const updated_orders = user.orders.filter((order_id) => {
        return order_id != order_id_to_delete;
    });
    user.orders = updated_orders;

    //Remove ticket object from database
    user.save().then(() => {
        order_model.findByIdAndRemove(order_id_to_delete).then(() => {
            res.redirect('/orders');
        });
    });
};

const get_ticket = (req, res, next) => {
    const ticket_id = req.params.id;
    incident_model.findOne({
        _id: ticket_id
    }).then((ticket) => {
        ticket.populate('products').execPopulate().then(() => {
       let data = {
        product_text: ticket.text,
        ticket_id: ticket._id,
        products: ticket.products
    };
    let html = product_views.products_view(data)
    res.send(html);
      });
   });
};



/*
const post_product = (req, res, next) => {
    const ticket_id = req.params.id;
    ticket_model.findOne({
        _id: ticket_id
    }).then((ticket) => {

    let new_product = product_model({
        text: req.body.pname,
        number: req.body.q

    });
    new_product.save().then(() => {
        console.log('product saved');
        ticket.products.push(new_product);
        ticket.save().then(() => {
            return res.redirect(`/ticket/${ticket._id}`);
        });
    });
});

};
*/

module.exports.get_home = get_home;

module.exports.get_incidents = get_incidents;
module.exports.post_incident = post_incident;
module.exports.post_delete_incident = post_delete_incident;

module.exports.get_orders = get_orders;
module.exports.post_order = post_order;
module.exports.post_delete_order = post_delete_order;

module.exports.get_ticket = get_ticket;
//module.exports.post_product = post_product;