const fs = require("fs");
const buf = Buffer.from(fs.readFile(`${process.argv[2]}`));
const arr = buf.toString().split("\n");
console.log(arr.length-1);

function (callback(err, data) {
  
})