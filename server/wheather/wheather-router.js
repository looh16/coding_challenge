const express = require("express");
const router = express.Router();

router.get("/country", (req, res) => {
    res.send("country");
})

module.exports = router;