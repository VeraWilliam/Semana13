const mysql = require('mysql');
const { promisify } = require('util');
const connect = require('passport/lib/framework/connect');

const { database } = require('./keys');
const Connection = require('mysql/lib/Connection');


const pool = mysql.createPool(database);
pool.getConnection((err, connect) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABSE CONNECTION WAS REFUSED');
        }
    }
    if (connection) connection.release();
    console.log('BD is Connected');
    return;
});

promisify(pool.query);

module.exports=pool
