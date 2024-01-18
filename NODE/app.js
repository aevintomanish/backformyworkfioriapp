//const logger = require('./logger')
//logger.logMessage("my Mes");

// const os = require('os');
// console.log(os.hostname());
// console.log(os.machine());
// console.log(os.platform());
// console.log(os.totalmem());
// console.log(os.userInfo());
// console.log(os.freemem());

// const path = require('path');
// console.log(__dirname);
// console.log(path.dirname(__dirname+'/app.js'));
// console.log(path.extname(__dirname+'/app.js'));
// console.log(path.dirname(__dirname+'/app.js'));


const fs = require('fs');
console.log('Before call');
const server = require('http');
// server.createServer(function (req, res) {
//     fs.readFile(__dirname + "/1.html", function (err, data) {
//         if (err) {
      
//             res.write("Error")
//         } else {
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.write(data)
//             return res.end();
//         }
//     });

// }).listen(3003)

// var fsData;
// try(){
//     fsData=fs.readFileSync
// }
// catch(){

// }


fs.appendFile("1.txt","New Content",function(err){
    if(err){
        res.writeHead(400,{'Content-Type':'text/html'});
    }
})
console.log('After Call')