//const express = require("express")
import express from 'express'
const app = express()
const router = express.Router()
import mongoose from "mongoose"
import { Student, getStudents, getStudentByText, createStudent, updateStudent, deleteStudent } from "../models/student.js"
import cors from "cors"

app.use(express.json()) // To get posted data through body
app.use(cors())

mongoose.connect("mongodb://localhost:27017/studentdb", (err) => {
    if (err) {
        throw err
    } else {
        console.log(`Connected to MongoDB successfully`)
    }
})

router.get("/", (req, res) => {
    res.json("Student API using MongoDB")
})

router.get("/students", (req, res) => {
    getStudents(function (err, data) {
        if (err) {
            throw err
        }
        res.json(data)
    })
})

router.get("/students/:text", (req, res) => {
    const text = req.params.text
    getStudentByText(text, (err, data) => {
        if (err) {
            throw err
        }
        res.json(data)
    })
})

router.post("/students", (req, res) => {
    const student = req.body
    createStudent(student, (err, data) => {
        if (err) {
            res.send(err).status(500)
        }
        res.json(data)
    })
})

router.put("/students/:id", (req, res) => {
    const studentId = req.params.id
    const student = req.body

    updateStudent(studentId, student, (err, data) => {
        if (err) {
            res.send(err).status(500)
        }
        res.json(data)
    })
})

router.delete("/students/:id", (req, res) => {
    const studentId = req.params.id
    deleteStudent(studentId, (err, data) => {
        if (err) {
            res.send(err).status(500)
        }
        res.json(data)
    })
})

app.use("/api", router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})