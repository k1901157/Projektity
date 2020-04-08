const tickets_view = ((data) => {
    let html = `

    

    <html>
    <head><title>IT Service Desk</title>
    <meta http-equiv="Content-Type", content="text/html;charset=UTF-8">
    <link rel='stylesheet' href='/style/style.css' />
    </head>

    <body>
    <div id="ticket">
    <a href= "/home">Home</a><div></div></br>
    <h1>IT Service Desk</h1>
    <h2>Please chose Ticket Type</h2> `;


    html += `
        <form action="/add-ticket" method="POST">

            <label> Ticket Number:</label>
            <input type="text" name="ticket">
            

            <label> Ticket Type:</label>
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

            <button type="submit" class="add_button">Add Ticket</button>
        </form>
        <div></div>`,

        data.tickets.forEach((ticket) => {
            //html += ticket.text;
            html += `
    
                <a href= "/ticket/${ticket._id}">${ticket.text}</a><div></div></br>
                <label> Ticket Type:</label> <td>${ticket.ticketType}</td> <div></div></br>
                <label> Incident Type:</label> <td>${ticket.incidentType}</td> <div></div></br>
                <label> Order Type:</label> <td>${ticket.orderType}</td> <div></div></br>
    
                <form action="delete-ticket" method="POST">
                    <input type="hidden" name="ticket_id" value="${ticket._id}">
                    <button type="submit" class="delete_button">Delete Ticket</button>
                </form>
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


const ticket_view = (data) => {
    let html = `
    <html>
    <body>
        ticket text: ${data.text}
    </body>
    </html>
    `;
    return html;
};

module.exports.tickets_view = tickets_view;
module.exports.ticket_view = ticket_view;