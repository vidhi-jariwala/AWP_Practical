var fs = require('fs');

console.log("serving User1..");

console.time();

fs.readFile('myfile.txt',function(err,data){
    if(err)
        return console.error(err);
    console.log(data.toString());
});
    
console.log("serving User2..");
console.log("serving User3..");
console.log("serving User4..");
console.log("Program Ended..");

console.timeEnd();