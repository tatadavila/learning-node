const staticUrlArr = [
  "http://localhost:42651",
  "http://localhost:34957",
  "http://localhost:41195",
];
let urlArr = [];

if (process.argv.length > 2) {
  for (let i = 2; i < process.argv.length; i++) {
    urlArr.push(process.argv[i]);
  }
} else {
  urlArr = staticUrlArr;
}

urlArr.forEach((url) => {
  http.get(url, (response) => {
    response.setEncoding('utf8').on('data', (data) => {
      console.log(data);
    })
    console.log(response);
  })
});
