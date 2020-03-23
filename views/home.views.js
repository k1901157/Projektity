const home_view = () => {
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
    <a href= "/add-item">home</a><div></div></br>
    <a href= "/tickets">home</a><div></div></br>


    </div>
    </body>
    <html>
    `;

    return html;
}

module.exports.home_view = home_view;