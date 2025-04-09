import express from "express"
import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://Murilo:Murilomano12@cluster0.zwwmqvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Banco de dados conectados"))
.catch(() => console.log("Deu Ruim"))