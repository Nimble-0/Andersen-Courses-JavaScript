const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(request, response) {
  var GamePath = "./Lecture_7" + request.url;
  var contentType = 'text/html';
  var extension = path.extname(GamePath);

    if(extension === ".js"){
        contentType = 'text/javascript';
    }
    if (GamePath === "./Lecture_7/") {
        GamePath += "kontorka.html";
    }

   fs.readFile(GamePath, function (error, content) {
    if (error) {
        console.error(error);
        response.writeHead(404, "Error 404");
        response.end("<h1><center>404 - File not found</center></h1>");
    }
    else {
        response.writeHead(200, {'Content-Type': contentType });
        response.end(content);
    }
   });
   
  });
   server.listen(8080, 'localhost', function(error) {
    if (error) {
        console.error(error);
        response.writeHead(404, "Error 404");
        response.end("<h1><center>404 - File not found</center></h1>");
    } else {
      console.log("Сервер запущен.");
    }
  });