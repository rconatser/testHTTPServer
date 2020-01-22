const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/api', (req, res, next) => {
//    res.sendFile(path.join(__dirname, '../', 'views', 'api.html'));
res.json({
    one: "Cats are cool",
    two: "Dogs also rule",
    three: "Bob is a Bunny"
});
});

module.exports = router;