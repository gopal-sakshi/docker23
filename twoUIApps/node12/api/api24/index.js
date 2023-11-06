var express = require('express');
var app = express();

const { Pool } = require('pg');

const credentials = { 
    user: "user44",
    host: "postgres44",         // use containerName
    // host: "127.0.0.1",       // this is wrong... it means loopback adapter, connect to myself
    database: "db87",
    password: "1258",
    port: 5432,
}

/*********************************************************/
app.use('/getData24A', (req, res) => {
    const players = ["Benz", "Luka", "Kroos"];
    res.send(players);
});

app.use('/query1', async (req, res) => {
    const pool = new Pool(credentials);    
    const now = await pool.query("SELECT NOW();");
    res.send(now.rows);
});

app.use('/query2', async (req, res) => {
    const pool = new Pool(credentials);    
    const now = await pool.query("SELECT * FROM MARKS;");
    res.send(now.rows);
});
/*********************************************************/

module.exports = app;