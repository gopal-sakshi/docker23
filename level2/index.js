
const express = require('express');
const { Pool } = require('pg');

const credentials = { 
    user: "user44",
    host: "postgres45",
    // host: "127.0.0.1",
    database: "db87",           
    password: "1258",
    port: 5432,
}
const app = express();
app.listen('18090', () => console.log('listening on 18090'));

/*************************************************************************/

/*
    if u made any changes here, u need to rebuild the docker image
    docker compose up -d            // will not reflect changes
    docker compose up -d --build    // WILL reflect changes
*/

// Use this curl command in windows... bcoz, curl in windows is alias for something IE/powerShell
// so, use this =====> Remove-item alias:curl
// curl http://localhost:8090/query1
app.use('/query1', async (req, res) => {
    const pool = new Pool(credentials);    
    const now = await pool.query("SELECT NOW();");
    let currTime = new Date();
    console.log(currTime, ' ___ ' , now.rows);
    res.send(now.rows);
});

// To connect to postgres database
    // open postgres container ====> psql -U user44 -d db87
    // "\list"  (or) "\dt"

app.use('/listTables', async(req, res) => {
    const pool = new Pool(credentials);
    const sqlQuery1 = `select table_schema||'.'||table_name as table_fullname
        from information_schema."tables"
        where table_type = 'BASE TABLE'
        and table_schema not in ('pg_catalog', 'information_schema');`    
    const now = await pool.query(sqlQuery1);
    let currTime = new Date();
    console.log(currTime, ' ___ ' , now.rows);
    res.send(now.rows);
})

app.use('/query2', async (req, res) => {
    const pool = new Pool(credentials);    
    const now = await pool.query("SELECT * FROM MARKS;");
    let currTime = new Date();
    console.log(currTime, ' ___ ' , now.rows);
    res.send(now.rows);
});

app.use('/', (req, res, next) => { res.send( 'basic setup ayindi ra abbai' )});

/*************************************************************************/
