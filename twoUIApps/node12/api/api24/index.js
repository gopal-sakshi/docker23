var express = require('express');
var app = express();

/*********************************************************/
app.use('/getData24A', (req, res) => {
    const players = ["Benz", "Luka", "Kroos"];
    res.send(players);
});
/*********************************************************/

module.exports = app;