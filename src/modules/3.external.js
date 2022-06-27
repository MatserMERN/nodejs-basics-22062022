const express = require("express")
const app = express()

const users = require("./users.json")

app.get("/", function(request, response){
    response.send("Welcome to Express API")
})

app.get("/student", function(request, response){
    response.send("Here is student data")
})

app.get("/employee", function(request, response){
    response.json("Here is the employee data")
})

app.get("/user", function(request, response){
    response.json(users)
})
app.get("*", function(request, response){
    response.send("Please contact administartor")
})

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server is listening at ${PORT}`)
})