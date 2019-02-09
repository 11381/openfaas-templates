"use strict"

const express = require('express');
const app = express();
const handler = require('./function/handler');
const bodyParser = require('body-parser');
const getSecret = require("./function/get-secret");
const jwt = require("express-jwt");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text({ type : "text/*" }));
app.disable('x-powered-by');

app.use(jwt({
    secret: getSecret(process.env.SECRET)
});

console.log("Registering handler route");
app.use(handler);
console.log("Handler route in use");

const port = process.env.http_port || 3000;

app.listen(port, () => {
    console.log(`Node.js function listening on port: ${port}`)
});