# Node.js Http Server Port Already in Use

This repository demonstrates a common error in Node.js: attempting to start an HTTP server on a port that is already in use.  The example code includes both the problematic code and a solution that handles this scenario gracefully.

## Problem

The `bug.js` file contains a simple HTTP server.  If you attempt to run this server while another process is using port 8080, it will throw an error.  The error message might not always be immediately obvious as the cause.

## Solution

The `bugSolution.js` file demonstrates a more robust approach. It uses an `error` event listener to handle the `EADDRINUSE` error, retrying the server start after a delay.