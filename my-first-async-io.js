"use strict";
const fs = require("fs");

fs.readFile(`${process.argv[2]}`, function (err, data) {
  if (err) console.log(err);
  const lines = data.toString().split("\n").length - 1;
  console.log(lines);
});
