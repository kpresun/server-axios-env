const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();

// include dotenv environmental variables for our applications

router.get('/giphy', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_KEY}`)
    .then(response => {
        console.log(response);
        res.sendStatus(200);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(500);
    })

})

module.exports = router;