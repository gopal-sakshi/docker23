
const express = require('express');
const { Pool } = require('pg');

const credentials = { 
    user: "user44",
    host: "postgres",
    // host: "127.0.0.1",
    database: "db87",           
    password: "1258",
    port: 5432,
}
const app = express();
app.listen('18090', () => console.log('listening on 18090'));

/*************************************************************************/

// Use this curl command in windows... bcoz, curl in windows is alias for something IE/powerShell
// so, use this =====> Remove-item alias:curl
// curl http://localhost:8090/query1
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

app.use('/', (req, res, next) => { res.send( 'basic setup ayindi ra abbai' )});

/*************************************************************************/
