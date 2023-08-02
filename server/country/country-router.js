const express = require("express");
const router = express.Router();

router.get("/city", (req, res) => {
    res.send("city");
})

module.exports = router;