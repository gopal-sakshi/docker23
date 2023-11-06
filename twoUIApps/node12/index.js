const express = require('express');
const app = express();


app.listen(42060, () => console.log('hammayya, listening on 42060'));

app.use('/api23', require('./api/api23'));
app.use('/api24', require('./api/api24'));

/*************************************************************************/

// Use this curl command in windows... bcoz, curl in windows is alias for something IE/powerShell
// so, use this =====> Remove-item alias:curl
// curl http://localhost:8090/query1


app.use('/', (req, res) => {
    // this ROUTE must always be the last... think about it
    res.send({
        info: 'you have hit base path;',
        path1: 'use /api23/getData23A',
        path2: 'use /api24/getData24A'
    });
});
/*************************************************************************/