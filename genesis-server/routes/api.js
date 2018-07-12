"use strict";

const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    res.json({
        message: "API works"
    });
});

router.get('/message', (req, res) => {
    res.json({
        message: "post works"
    });
});

module.exports = router;
