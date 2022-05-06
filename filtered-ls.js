"use strict";
const fs = require("fs");
const path = require("path");

const folder = process.argv[2]
  ? process.argv[2]
  : "/home/devitech/Documents/CODING/learning-node";
const fileType = process.argv[3] ? process.argv[3] : "js";

fs.readdir(folder, (err, list) => {
  if (err) console.log(err);
  const filtered = list.filter((file) => {
    path.extname(file) === `.${fileType}` && console.log(file);
  });
});
