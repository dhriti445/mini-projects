import http from 'http'
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});

    res.end('Hello,this is a simple Node.js Server');
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('Server is running on http://localhost:3000');
});


// options={key:key,certi:certi}; in https  obj has to be there for secrret key and certificate