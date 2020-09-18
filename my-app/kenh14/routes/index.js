var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/san-pham', function(req, res, next) {
    res.render('san-pham', { title: 'Sản Phẩm' });
});
router.get('/tin-tuc', function(req, res, next) {
    res.render('tin-tuc', { title: 'Tin Tức' });
});
router.get('/DHCNHN', function(req, res, next) {
    // var listSv = ["Phương", "Nga", 'Thảo'];
    var listSv = {
        SV: [
            "Phương", "Nga", 'Thảo'
        ]
    }
    res.render('DHCNHN', { title: 'Trang chủ ĐHCN Hà Nội', list: listSv });
});

router.get('/about.html', function(req, res, next) {
    res.render('about', { title: 'Trang about' });
});
router.get('/products.html', function(req, res, next) {
    res.render('products', { title: 'Trang products' });
});
router.get('/store.html', function(req, res, next) {
    res.render('store', { title: 'Trang store' });
});
router.get('/idu?*.vn', function(req, res, next) {
    res.send('idu.vn');
});
//COOKIE
// Tạo cookie
router.get('/idu?*.vn/:std', function(req, res, next) {
    res.cookie('dt', req.params.std, { maxAge: 60 });
    res.send('idu.vn: ' + req.params.std);
});
// Lấy cookie
router.get('/edu?*.vn', function(req, res, next) {
    res.send('edu.vn: ' + req.cookies.dt);
});
//Xoa cookie
router.get('/adu?*.vn', function(req, res, next) {
    res.clearCookie('dt');
    res.send('Dã xoa ');
});

//SESSION

//Tạo sesstion
router.get('/createSession', function(req, res, next) {
    req.session.monan = "Bún chả";
    res.send('Đã tạo session ');
});
//Lấy sesstion
router.get('/pickSession', function(req, res, next) {
    res.send('Lấy thành công ' + req.session.monan);
});
//Xóa sesstion
router.get('/destroySession', function(req, res, next) {
    req.session.destroy(function(err) {
        console.log(err)
    })
    res.send('Đã xoa session');
    res.end();
});
module.exports = router;