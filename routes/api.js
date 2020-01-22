const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/api', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'api.html'));
});

module.exports = router;