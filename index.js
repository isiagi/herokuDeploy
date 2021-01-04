const express = require("express");

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Hello there")
})

app.get("/test", (req, res) => {
    res.status(200).send("You are on the Testing Route")
})

//more routes POST, PUT, DELETE, PATCH also can be used

app.listen(3000, () => {
    console.log("Server Up and Runnin on Port 3000")
})