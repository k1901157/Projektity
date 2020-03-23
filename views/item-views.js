const items_view = ((data) => {
    let html = `

    
    <html>
    <head><title>IT Service Desk</title>
    <meta http-equiv="Content-Type", content="text/html;charset=UTF-8">
    <link rel='stylesheet' href='/style/style.css' />
    </head>

    <body>
    <div id="item">
    <a href= "/">home</a><div></div></br>
    <h1>IT Service Desk</h1>
    <h2>Please chose item Type</h2> `;



    html += `
        <form action="/add-item" method="POST">

            <label> item Number:</label>
            <input type="text" name="item">
            

            <label> item Type:</label>
            <select name="itemType">
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

            <button type="submit" class="add_button">Add item</button>
        </form>
        <div></div>`;

        data.items.forEach((item) => {
            //html += item.text;
            html += `
            <div id="test">
                <a href= "/item/${item._id}">${item.text}</a><div></div></br>
                <label> item Type:</label> <td>${item.itemType}</td> <div></div></br>
                <label> Incident Type:</label> <td>${item.incidentType}</td> <div></div></br>
                <label> Order Type:</label> <td>${item.orderType}</td> <div></div></br>
    
                <form action="delete-item" method="POST">
                    <input type="hidden" name="item_id" value="${item._id}">
                    <button type="submit" class="delete_button">Delete item</button>
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


const item_view = (data) => {
    let html = `
    <html>
    <body>
        item text: ${data.text}
    </body>
    </html>
    `;
    return html;
};

module.exports.items_view = items_view;
module.exports.item_view = item_view;