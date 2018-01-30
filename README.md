### userInfo

使用``npm install``安装依赖

使用``npm run webpack``进行打包

使用``npm start``启动服务

最后使用浏览器打开``http://localhost:3000``

创建postCoverMessage的表：

create table postCoverMessage(
    message_id INT UNSIGNED AUTO_INCREMENT,
    userName varchar(40) not null ,
    name varchar(40) not null,
    sex varchar(20) not null,
    tel varchar(40) not null,
    email varchar(40) not null,
    job varchar(40) not null,
    schoolName varchar(40) not null,
    date1 varchar(100) not null,
    date2 varchar(100) not null,
    major varchar(100) not null,
    academic varchar(100) not null,
    projectName varchar(200) not null,
    standard varchar(40) not null,
    rol varchar(100) not null,
    describes varchar(400) not null,
    summary varchar(400) not null,
    duty varchar(400) not null,
    jobType varchar(40) not null,
    city varchar(100) not null,
    pay varchar(100) not null,
    industry varchar(100) not null,
    occupation varchar(100) not null,
    hobby varchar(400) not null,
    evaluate varchar(400),
    fileUpload varchar(100),
    primary key (message_id)
)default charset=utf8;



