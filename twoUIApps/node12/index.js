const express = require('express');
const app = express();
const { Pool } = require('pg');

const credentials = { 
    user: "user44",
    host: "postgres",
    // host: "127.0.0.1",
    database: "db87",           
    password: "1258",
    port: 5432,
}

app.listen(42060, () => console.log('hammayya, listening on 42060'));

app.use('/api23', require('./api/api23'));
app.use('/api24', require('./api/api24'));

app.use('/', (req, res) => {
    res.send({
        info: 'you have hit base path;',
        path1: 'use /api23/getData23A',
        path2: 'use /api24/getData24A',
        path3: 'use /query1'
    });
});

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


/*************************************************************************/