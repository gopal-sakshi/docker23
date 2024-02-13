
const express = require('express');
const { Pool } = require('pg');

const credentials = { 
    user: "postgres",
    host: "postgres45",
    database: "postgres",
    password: "postgres",
    port: 5432,
}
const app = express();
app.listen('18090', () => console.log('listening23 on 18090'));

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

app.use('/', (req, res, next) => { 

    let str11 = `To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer--excellent for drawing the veil from men's motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory. I had seen little of Holmes lately. My marriage had drifted us away from each other.... To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer--excellent for drawing the veil from men's motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory. I had seen little of Holmes lately. My marriage had drifted us away from each other.`;

    // console.log(`check - log ayindo ledo time ==> ${new Date().toISOString()}`);
    console.log(`simply dump big big logs ===> ${str11} ----- time = ${new Date().toISOString()}`)
    res.send( `setup ayindiii ra abbai, time=${new Date().toISOString()}` )
});

/*************************************************************************/
