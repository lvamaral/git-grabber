const fs = require('fs');
const http = require('http');
const qs = require('querystring');
//
const githubServer = http.createServer( (req,res) => {
  if (req.method === 'POST') {
  let body = '';
  req.on('data', d => {
    // d is an instance of Buffer,
    // toString is implicitly called when we add it to body
    body += d
  })
  req.on('end', () => {
    // qs.parse will give us a nice object to retrieve the value
    const username = qs.parse(body).username
    console.log(body);
    console.log(username);
    res.end(username)
  })
}
if (req.method === 'GET') {
  res.end("Hellow")
}
})


githubServer.listen(8080, ()=>"Listening...")
