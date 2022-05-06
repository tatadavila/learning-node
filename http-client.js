"use strict";
const http = require("http");

url = process.argv[2]
  ? process.argv[2]
  : "http://universities.hipolabs.com/search?country=United+States";

http.get(url, (response) => {
  response.setEncoding("utf8").on("data", (data) => {
    console.log(data);
  });
});
