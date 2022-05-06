"use strict";
const fs = require("fs");

const file = process.argv[2] ? process.argv[2] : '/home/devitech/Documents/CODING/learning-node' ;
const fileType = process.argv[3] ? process.argv[3] : 'git'

fs.readdir(file, (err, list) => {
  if (err) console.log(err);
  
  // console.log(list);
});
