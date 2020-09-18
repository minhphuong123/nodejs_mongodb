var express = require('express');
var router = express.Router();
router.get('/showbist', function(req, res, next) {
    res.send("lol showbist");
});
module.exports = router;