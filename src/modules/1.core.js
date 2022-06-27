const http = require("http")

http.createServer(function(request, response){
    console.log(request.headers.referer)
    console.log(request.url)
    if(request.url == "/") {
        response.end("Hello World, Welcome to the NodeJS core module")
    } else if (request.url == "/user"){
        response.end("here is your user data")
    }  else if (request.url == "/employee"){
        response.end("here is your employee data")
    } else {
        response.end("Please contact your administartor")
    }
}).listen(1234)