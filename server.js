const http = require('http')
//console.log(http);

const server = http.createServer((req,res)=>{
    //console.log(req.url);
    if(req.url == '/'){
        res.write('<h1>this is a ws of node</h1>')
        res.end()
    }

    if(req.url == '/user'){
        res.write('<h1>this is a Profile Page</h1>')
        res.end()
    }
})
const PORT = 5000;

server.listen(5000, err => err? console.log(err) : console.log(`Server is running on ${PORT}...`))