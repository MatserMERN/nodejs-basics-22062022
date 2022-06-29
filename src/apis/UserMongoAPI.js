const express = require("express")
const app = express()
const router = express.Router()
const mongoose = require("mongoose")
const User = require("../models/user")

app.use(express.json()) // To get posted data through body

mongoose.connect("mongodb://localhost:27017/studentdb",(err) => {
    if(err){
        throw err
    } else {
        console.log(`Connected to MongoDB successfully`)
    }
})

router.get("/", (req, res) => {
    res.json("User API using MongoDB")
})

router.get("/users", async (req, res) => {
    var students = await User.find()
    res.json(students)
    // try{
    //     res.json(students)
    // } catch(err){
    //     res.send(err).status(500)
    // }
})

router.post("/users", async (req, res) => {
    var user = req.body
    var userObj = new User(user)
    var output = await userObj.save()
    res.json(output)
})

router.put("/users/:id", async (req, res)=>{
    const studentId = req.params.id 
    const student = req.body
    const output = await User.updateOne({_id: studentId}, student)
    res.json(output)
})

router.delete("/users/:id", async(req, res) => {
    const studentId = req.params.id 
    const output = await User.deleteOne({_id: studentId})
    res.json(output)
})


app.use("/api", router)

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Server listening at PORT ${PORT}`)
})