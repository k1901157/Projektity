const incidents_view = ((data) => {
    let html = `

    

    <html>
    <head><title>IT Service Desk</title>
    <meta http-equiv="Content-Type", content="text/html;charset=UTF-8">
    <link rel='stylesheet' href='/style/incident.css' />
    </head>

    <body>
    <div id="tickets">
    <a class="nav" href= "/home">Home</a>
    <a class="nav" href= "/incidents">Incidents</a>
    <a class="nav" href= "/orders">Orders</a>
    <hr align="left" width="75%">
    <div></div></br>
    <h1>IT Service Desk</h1>
    <h2>Please chose Ticket Type</h2> `;


    html += `
        <form action="/add-ticket" method="POST">

            <label> Ticket Number:</label>
            <input type="text" placeholder="" value="IT-0222 +(put your ID)" name="incident">
            

            <label> Incident Type:</label>
            <select name="incidentType">
              <option value="--------">--------</option>
              <option value="hardware">Hardware Issue</option>
              <option value="software">Software Issue</option>
              <option value="network">Network Issue</option>
              <option value="notListed">Not Listed ?</option>
            </select>


            <button type="submit" class="add_button">Add Ticket</button>
        </form>
        <div></div>`,

        data.incidents.forEach((incident) => {
            //html += ticket.text;
            html += `
    <div id="home">
                <label> Your Ticket has been created >> </label>
                <label> Incident Type:</label> <td>${incident.incidentType}</td>
                <label>, Please click on the following link to put more details >> </label>
                <a href= "/ticket/${incident._id}">${incident.text}</a>

    </div>
                <form action="delete-incident" method="POST">
                    <input type="hidden" name="incident_id" value="${incident._id}">
                    <button type="submit" class="delete_button">Delete Incident</button>
                </form>
                <div></div>
                `;
        });


        html += `
        <div id="log">
        Logged in as user: ${data.user_name}
        
        <form action="/logout" method="POST">
            <button type="submit" class="log_out_button">Log out</button>
        </form>
        </div>
    </div>
    <hr/>
    <footer>&copy; IT Service Desk Managment </footer>
    <hr/>
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

module.exports.incidents_view = incidents_view;
module.exports.ticket_view = ticket_view;