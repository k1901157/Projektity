const home_view = (data) => {
    let html = `
    
    <html>
    <head>
    <title>IT Service Desk</title>
    <meta http-equiv="Content-Type", content="text/html;charset=UTF-8">
    <link rel='stylesheet' href='/style/style.css' />
    </head>
    <body>
    <div id=home>

    <h1>Welcome to IT Service Desk</h1>
    <p>This application will work as IT customer care centre services, it will help the customers to contact IT department easily and quickly using this app.
    If the customers have any problems in their PCs or if they want to order anything they need from IT Department , so they will open a new ticket using this app, once the ticket has been created then IT Department will contact the customers as per the ticket’s priority to get their issues sorted out.
    The customer will open new task ( incident or order ) by themselves and the app will ask many questions to figure out what is the customers looking for, then the app will assign the priority, then the app will tell the customer: when the IT person will contact them to get the customer’s issue sorted out.
    </P>    
    
    <h2> Type of Tickets:</h2>
    <a href= "/incidents">1- Incidents (Hardware and Software issues)</a><div></div></br>
    <a href= "/add-item">2- Order (Order items)</a><div></div></br>

    
    <div></div>
    Logged in as user: ${data.user_name}
    
    <form action="/logout" method="POST">
        <button type="submit" class="log_out_button">Log out</button>
    </form>

    </div>

    <hr/><hr/>
    <footer>&copy; IT Service Desk Managment </footer>
    <hr/><hr/>

    </body>
    <html>
    `;

    return html;
}

module.exports.home_view = home_view;