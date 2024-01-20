const mysql=require('mysql2');

const poll=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'databace1',
    password:'1122'
});

module.exports=poll.promise();