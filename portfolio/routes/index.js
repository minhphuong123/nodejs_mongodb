var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/details*/:idsp', function(req, res, next) {
    var idsanpham = req.params.idsp;
    if (!req.session.spdaxem) {
        req.session.spdaxem = [];
    }
    if (req.session.spdaxem.indexOf(idsanpham) == -1) {
        req.session.spdaxem.push(idsanpham);
    }

    res.render('details', { idsp: req.params.idsp, danhsach: req.session.spdaxem });
});
router.get('/sanphamdaxem', function(req, res, next) {
    res.render('sanphamdaxem', { danhsach: req.session.spdaxem });
});
module.exports = router;