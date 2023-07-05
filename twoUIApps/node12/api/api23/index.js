var express = require('express');
var app = express();

/*********************************************************/
app.use('/getData23A', (req, res) => {
    const players = ["CR7", "KB9", "SR4"];
    res.send(players);
});
/*********************************************************/

module.exports = app;