const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('public/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));
app.post('/profile', upload.single('avatar'), (req, res, next)=> {
    res.send({
        err: null,
        filePath: 'uploads/' + path.basename(req.file.path)
    });
});
app.use(cookieParser());
app.use(session({
    secret: 'a',
    resave: true,
    saveUninitialized: true
}));


const addUser = require('./server/routers/insertUser');
const findUser = require('./server/routers/findUser');
const searchUser = require('./server/routers/searchUser');
const addCoverMessage = require('./server/routers/insertCoverMessage');
const findCoverMessage = require('./server/routers/findMessage');
const updatePassword = require('./server/routers/updatePassword');
const updateUsername = require('./server/routers/updateUsername');
const personalSend = require('./server/routers/findPersonalMessage');
const updateCoverMessage = require('./server/routers/updateCoverMessage');
const deleteCoverMessage = require('./server/routers/deleteCoverMessage');

app.use('/',addUser);
app.use('/',findUser);
app.use('/',searchUser);
app.use('/',addCoverMessage);
app.use('/',findCoverMessage);
app.use('/',updatePassword);
app.use('/',updateUsername);
app.use('/',personalSend);
app.use('/',updateCoverMessage);
app.use('/',deleteCoverMessage);

app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;
