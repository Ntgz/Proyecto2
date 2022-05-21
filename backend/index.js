import express from "express";
import conectarDB from './config/db.js'
const app = express();


conectarDB();

app.use('/', (req, res) => {
    res.send("hola mundo");
})

app.listen(4000, () => {
    console.log("Empezó");
});