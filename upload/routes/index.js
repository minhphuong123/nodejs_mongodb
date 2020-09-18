var express = require('express');
var router = express.Router();

//b1: cài đặt body-parser (trong package.json)
//b2:cài đặt cấu hình cho multer:  npm install --save multer coppy trên trang chủ là chủ yếu

var multer = require('multer');
var upload = multer();
var storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './public/imgUpload')
        },
        filename: function(req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname) //file.originalname: teen file uplen
        }
    })
    //kiểm tra để chỉ cho up file ảnh, còn không thì bỏ
function checkFileUpload(req, file, cb) {
    //file.originalname: nếu tên file khac đuôi png, jpg... thì báo lỗi, match: phù hợp với biểu thức chính quy:reqular expression
    if (!file.originalname.match(/\.(png|jpg|gif|jpeg)$/)) {
        cb(new Error('Chỉ được upload ảnh'))

    } else {
        cb(null, true)
    }
}
var upload = multer({ storage: storage, fileFilter: checkFileUpload })
    // You can always pass an error if something goes wrong:

// /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Upload File' });
});

/* Post upload file. */
router.post('/', upload.array('imgUpload', 10), function(req, res, next) {
    var ten = req.body.ten;
    res.send('Tên bạn là: ' + ten);
});
module.exports = router;