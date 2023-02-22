var http = require('http');  
  
http.createServer(function (req, res) {  
    res.end('Hello World!');   
}).listen(5500); 
  
console.log('Server running at http://127.0.0.1:5500');