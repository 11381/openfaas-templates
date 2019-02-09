"use strict"

const express = require('express');
const router = express.Router();
const getSecret = require("./get-secret");

router.post("*", async (req, res) => {
    try {
        return res.status(200)
            .json({
                message: "Hello!"
            });
    } catch (error) {
        res.status(error.status || 400).send(error.message);
    }
});

module.exports = router;