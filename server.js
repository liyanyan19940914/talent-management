const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require('fs');

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
const searchMessage = require('./server/routers/searchMessage');
const legalUsername = require('./server/routers/legalUsername');
const logout = require('./server/routers/logout');
const insertDiscuss = require('./server/routers/insertDiscuess');
const findDiscuss = require('./server/routers/findDiscuss');
const forgetPsw = require('./server/routers/forgetPsw');
const addSort = require('./server/routers/addSort');
const allSort = require('./server/routers/findAllSort');
const updataSort = require('./server/routers/updateSort');
const searchSort = require('./server/routers/findSort');
// const searchLimit = require('./server/routers/searchLimit');

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
app.use('/',searchMessage);
app.use('/',legalUsername);
app.use('/',logout);
app.use('/',insertDiscuss);
app.use('/',findDiscuss);
app.use('/',forgetPsw);
app.use('/',addSort);
app.use('/',allSort);
app.use('/',updataSort);
app.use('/',searchSort);
// app.use('/',searchLimit);

app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;
