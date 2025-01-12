const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

startServer();

//Error Handling

 server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Retrying in 1 second...`);
    setTimeout(startServer, 1000); //Retry after 1 second
  } else {
    console.error(`An error occurred: ${err.message}`);
  }
});