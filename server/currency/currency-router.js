const express = require("express");
const router = express.Router();

router.get("/exchange", (req, res) => {
    res.send("exchange");
})

module.exports = router;