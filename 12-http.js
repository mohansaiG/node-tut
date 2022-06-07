const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/')
    {
    res.end("Welcome Home!!!!")
    console.log("HAI")
} else {
res.end(
    `<a href='/'> back <a>`
)
}
})

server.listen(4000)