const http = require('http');
const port = 3000;
const fs = require('fs');

const text  = 'Hello to this great world';

const requestHandler = (req, res) => {
  fs.writeFile('hello-world.txt', text, 'utf8', err => {
    if(err) {
      throw err;
    }

    console.log('Success!');  
  });

  res.end('Handling request');
}

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if(err) {
    return console.log('You have an error: ' + err);
  }

  console.log('Server is listening on ' + port);
});