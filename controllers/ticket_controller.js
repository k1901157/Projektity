const ticket_model = require('../models/ticket-model');
const ticket_views = require('../views/ticket-views');
//const product_model = require('../models/product-model');
//const product_views = require('../views/product-views');
const item_model = require('../models/item-model');
const item_views = require('../views/item-views');

const home_view = require('../views/home.views');

const get_home =  (req, res, next) => {
    const user = req.user;
    user.populate()
        .execPopulate()
        .then(() => {
            console.log('user:', user);
            let data = {
               // user_name: user.name,
               // tickets: user.tickets
            };
            let html = home_view.home_view(data)
            res.send(html);
        });
};

const get_tickets =  (req, res, next) => {
    const user = req.user;
    user.populate('tickets')
        .execPopulate()
        .then(() => {
            console.log('user:', user);
            let data = {
                user_name: user.name,
                tickets: user.tickets
            };
            let html = ticket_views.tickets_view(data)
            res.send(html);
        });
};


const get_item =  (req, res, next) => {
    const user = req.user;
    user.populate('items')
        .execPopulate()
        .then(() => {
            console.log('user:', user);
            let data = {
                user_name: user.name,
                items: user.items
            };
            let html = item_views.items_view(data)
            res.send(html);
        });
};

const get_ticket = (req, res, next) => {
    const ticket_id = req.params.id;
    ticket_model.findOne({
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

const post_delete_ticket = (req, res, next) => {
    const user = req.user;
    const ticket_id_to_delete = req.body.ticket_id;

    //Remove ticket from user.tickets
    const updated_tickets = user.tickets.filter((ticket_id) => {
        return ticket_id != ticket_id_to_delete;
    });
    user.tickets = updated_tickets;

    //Remove ticket object from database
    user.save().then(() => {
        ticket_model.findByIdAndRemove(ticket_id_to_delete).then(() => {
            res.redirect('/');
        });
    });
};


const post_delete_item = (req, res, next) => {
    const user = req.user;
    const item_id_to_delete = req.body.item_id;

    //Remove ticket from user.tickets
    const updated_items = user.items.filter((item_id) => {
        return item_id != item_id_to_delete;
    });
    user.items = updated_items;

    //Remove ticket object from database
    user.save().then(() => {
        item_model.findByIdAndRemove(item_id_to_delete).then(() => {
            res.redirect('/add-item');
        });
    });
};


const post_ticket = (req, res, next) => {
    const user = req.user;
    let new_ticket = ticket_model({
        text: req.body.ticket,
        ticketType: req.body.ticketType,
        incidentType: req.body.incidentType,
        orderType: req.body.orderType,
    });
    new_ticket.save().then(() => {
        console.log('ticket saved');
        user.tickets.push(new_ticket);
        user.save().then(() => {
            return res.redirect('/tickets');
        });
    });
};

const post_item = (req, res, next) => {
    const user = req.user;
    let new_item = item_model({
        text: req.body.item,
        itemType: req.body.itemType,
        incidentType: req.body.incidentType,
        orderType: req.body.orderType,
    });
    new_item.save().then(() => {
        console.log('item saved');
        user.items.push(new_item);
        user.save().then(() => {
            return res.redirect('/add-item');
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

module.exports.get_tickets = get_tickets;
module.exports.get_ticket = get_ticket;
module.exports.get_item = get_item;
module.exports.post_ticket = post_ticket;
module.exports.post_delete_ticket = post_delete_ticket;
//module.exports.post_product = post_product;
module.exports.get_home = get_home;

module.exports.post_item = post_item;
module.exports.post_delete_item = post_delete_item;