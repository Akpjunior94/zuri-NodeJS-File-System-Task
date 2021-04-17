const request = require("request");

request({
  url: "http://jsonplaceholder.typicode.com/posts",
  json: true
}, (err, response, body) => {
  let data = JSON.stringify(body, undefined, 4);

  // file system - Write the JSON data gotten from the API to a file called posts.json or posts.txt
  const fs = require('fs')
  // fs.mkdirSync('result');
  const content = data;

  fs.writeFile('./result/posts.json', content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
});


