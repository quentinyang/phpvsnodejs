var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
    var result = "<div>Hello World.</div><p>php vs nodejs</p>";
    res.end(result);
});
server.listen(8000);