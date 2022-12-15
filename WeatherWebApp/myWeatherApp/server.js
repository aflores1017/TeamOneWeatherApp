const { response } = require('express')
const http = require('http')//library to start server 
const port = 3050// port to run server
const fs = require('fs')// file handling
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})//headers to send html to browser
    fs.readFile('index.html', (error, data)=>{
        if (error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)//writting data from file (index.html)
        }
        res.end()
    })
   
})

server.listen(port, (error)=>{
    if(error){
        console.log('something went wrong try again', error)
    }
    else{
        console.log('server is listening on port: ' + port)
    }
})
