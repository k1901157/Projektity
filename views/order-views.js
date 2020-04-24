const orders_view = ((data) => {
    let html = `

    
    <html>
    <head><title>IT Service Desk</title>
    <meta http-equiv="Content-Type", content="text/html;charset=UTF-8">
    <link rel='stylesheet' href='/style/style.css' />
    </head>

    <body>
    <div id="order">
    <a href= "/">home</a><div></div></br>
    <h1>IT Service Desk</h1>
    <h2>Please chose order Type</h2> `;



    html += `
        <form action="/add-order" method="POST">

            <label> order Number:</label>
            <input type="text" name="order">
            

            <label> order Type:</label>
            <select name="ticketType">
              <option value="incident">Incident</option>
              <option value="order">Order</option>
            </select>

            <label> Incident Type:</label>
            <select name="incidentType">
              <option value="--------">--------</option>
              <option value="hardware">Hardware Issue</option>
            <option value="software">Software Issue</option>
            </select>

            <label> Order Type:</label>
            <select name="orderType">
              <option value="--------">--------</option>
              <option value="laptop">Laptop</option>
            <option value="desktop">Desktop</option>
            </select>

            <button type="submit" class="add_button">Add order</button>
        </form>
        <div></div>`;

        data.orders.forEach((order) => {
            //html += order.text;
            html += `
            <div id="test">
                <a href= "/order/${order._id}">${order.text}</a><div></div></br>
                <label> order Type:</label> <td>${order.ticketType}</td> <div></div></br>
                <label> Incident Type:</label> <td>${order.incidentType}</td> <div></div></br>
                <label> Order Type:</label> <td>${order.orderType}</td> <div></div></br>
    
                <form action="delete-order" method="POST">
                    <input type="hidden" name="order_id" value="${order._id}">
                    <button type="submit" class="delete_button">Delete order</button>
                </form>
                </div>
                <div></div>
                `;
        });

        html += `
        <div></div>
        Logged in as user: ${data.user_name}
        
        <form action="/logout" method="POST">
            <button type="submit" class="log_out_button">Log out</button>
        </form>
    </div>
    </html>
    </body>
    `;
    return html;
});


const order_view = (data) => {
    let html = `
    <html>
    <body>
        order text: ${data.text}
    </body>
    </html>
    `;
    return html;
};

module.exports.orders_view = orders_view;
module.exports.order_view = order_view;