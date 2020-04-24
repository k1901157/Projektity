const home_view = (data) => {
    let html = `
    
    <html>
    <head>
    <title>IT Service Desk</title>
    <meta http-equiv="Content-Type", content="text/html;charset=UTF-8">
    <link rel='stylesheet' href='/style/home.css' />
    </head>
    <body>
    <div id=home_all>
    <a class="nav" href= "/home">Home</a>
    <a class="nav" href= "/incidents">Incidents</a>
    <a class="nav" href= "/orders">Orders</a>
    <hr align="left" width="75%">
    <h1>Welcome to IT Service Desk</h1>
    <div id=home>
    <p>This application will work as IT customer care centre services, it will help you to contact IT department easily and quickly using this app.</p>
    <p>If you have any problems in your PCs or if you want to order anything you need from IT Department, so follow the below constractions: </p> 
    <p>1- for any Hardware, Software, Network or any other issues, please choose <b>Incident </b></p>
    <a class="nav" href= "/incidents"> Incidents </a><div></div></br>
    <p>2- for any Request for Laptop, Desktop, Printer, Applicaton....etc. please choose <b>Orders </b></p>
    <a class="nav" href= "/orders"> Orders </a><div></div></br>
    <p>once the ticket has been created then IT Department will contact you as per the ticket’s priority to get your issues sorted out.</P>
    
    </div> 
    
    <h2> Type of Tickets:</h2>
    <a class="nav" href= "/incidents">1- Incidents (Hardware and Software issues)</a><div></div></br>
    <a class="nav" href= "/orders">2- Order (Order items)</a><div></div></br>

    

    <div id=log>
    Logged in as user: ${data.user_name}
    
    <form action="/logout" method="POST">
        <button type="submit" class="log_out_button">Log out</button>
    </form>
    </div>

    </div>

    <hr/>
    <footer>&copy; IT Service Desk Managment </footer>
    <hr/>

    </body>
    <html>
    `;

    return html;
}

module.exports.home_view = home_view;