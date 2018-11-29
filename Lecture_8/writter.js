const fs = require("fs");
var stdin = process.openStdin();
var path = require('path');
var folderPath = path.resolve(__dirname);
var fileName = "temp.txt";
var filePath = path.resolve(folderPath + fileName);

var writeToFile = function(){
    stdin.addListener("data", function(d) {
        var words = String(d.toString().trim());
            if (words === "exit"){
                console.log("Выполен выход. Временный файл удален.");
                fs.unlinkSync(filePath);
                process.exit();
            }
            console.log("Записано в файл: [" + words + "]");
            fs.appendFile(filePath, '\r\n' + words + ' ', function(){  
            });
        
        });        
}

try {
    fs.statSync(filePath);
    console.log("Файл "+ fileName + " уже существует.");
    process.exit();
  }
  
  catch (e) {
    writeToFile();
}