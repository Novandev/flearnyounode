// module import of http module
const http = require('http')
// requires the file reading system
const fs = require('fs')
// server is created  and piping is started
const server = http.createServer(function (req, res) {
  // head is writen if succesful
  res.writeHead(200, { 'content-type': 'text/plain' })
// arguments are proccesed via the read stream and piped
  fs.createReadStream(process.argv[3]).pipe(res)
})
// all 3 inputs are on listener
server.listen(Number(process.argv[2]))
