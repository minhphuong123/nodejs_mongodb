var express = require('express');
var router = express.Router();
//coppy code trên github -- https://github.com/mongodb/node-mongodb-native
const MongoClient = require('mongodb').MongoClient;
//khai báo đối tượng objectID để chuyển _id thành objectID 
var chuyenObjectID = require('mongodb').ObjectID;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'admin';

// Use connect method to connect to the server -- test kết nối đến serve 
// MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     console.log("Kết nối thành công!");

//     const db = client.db(dbName);

//     client.close();
// });
//kết thuc kết nối
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/them', function(req, res, next) {
    res.render('them', { title: 'Thêm dữ liệu' });
});

//Thêm dữ liệu vào trong cơ sở dữ liệu mongodb
router.post('/them', function(req, res, next) {
    var dulieu01 = {
        "ten": req.body.ten,
        "dienthoai": req.body.dt
    }
    const insertDocuments = function(db, callback) {
        // Get the documents collection
        const collection = db.collection('ad');
        // Insert some documents
        collection.insert(dulieu01, function(err, result) {
            assert.equal(err, null);
            console.log("Thêm dữ liệu mới thành công!");
            callback(result);
        });
    }
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);

        insertDocuments(db, function() {
            client.close();
        });
    });
    res.redirect('/them');
});
//Xem dữ liệu
router.get('/xem', function(req, res, next) {

    const findDocuments = function(db, callback) {
        // Get the documents collection
        const collection = db.collection('ad');
        // Find some documents
        collection.find({}).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs)
            callback(docs);
        });
    }
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected correctly to server");

        const db = client.db(dbName);

        findDocuments(db, function(dulieu) {
            res.render('xem', { title: 'Xem dữ liệu', data: dulieu });
            client.close();
        });
    });
});
//Xóa dữ liệu
router.get('/xoa/:idphantu', function(req, res, next) {
    var idphantu = chuyenObjectID(req.params.idphantu);
    const removeDocument = function(db, callback) {
        // Get the documents collection
        const collection = db.collection('ad');
        // Delete document where a is 3
        collection.deleteOne({ _id: idphantu }, function(err, result) {
            assert.equal(err, null);
            console.log("Xóa thành công!");
            callback(result);
        });
    }
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        removeDocument(db, function() {
            client.close();
            res.redirect('/xem');
        });
    });
});

//Sửa dữ liệu
//lấy id và kết nối lấy dữ liệu
router.get('/sua/:idphantu', function(req, res, next) {
    var idphantu = chuyenObjectID(req.params.idphantu);
    //Tìm ra id của phần tử cần sửa
    const findDocuments = function(db, callback) {
            // Get the documents collection
            const collection = db.collection('ad');
            // Find some documents
            collection.find({ _id: idphantu }).toArray(function(err, docs) {
                assert.equal(err, null);
                callback(docs);
            });
        }
        //Kết nối id cần sửa với mongodb để lấy dữ liệu: lấy trên phần xem
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected correctly to server");

        const db = client.db(dbName);

        findDocuments(db, function(dulieu) {
            res.render('sua', { title: 'Sửa dữ liệu', data: dulieu });
            console.log(dulieu);
            client.close();
        });
    });

});
//update dữ liệu
router.post('/sua/:idphantu', function(req, res, next) {
    var idphantu = chuyenObjectID(req.params.idphantu);
    var dulieu01 = {
        "ten": req.body.ten,
        "dienthoai": req.body.dt
    }
    const updateDocument = function(db, callback) {
        // Get the documents collection
        const collection = db.collection('ad');
        // Update document where a is 2, set b equal to 1
        collection.updateOne({ _id: idphantu }, { $set: dulieu01 }, function(err, result) {
            assert.equal(err, null);
            callback(result);
        });
    }
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        updateDocument(db, function() {
            res.redirect('/xem');
            client.close();
        });
    });
});

module.exports = router;