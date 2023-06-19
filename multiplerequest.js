const http=require('http');
const port=3019;
const hostname='localhost';
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.statusCode=200;
        res.setHeader("content-type","application/json")
        res.end(JSON.stringify({"mentor":"Madhan"}));

    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.setHeader("content-type","text/plain")
        res.end("About Page!");
    }
    else if(req.url=='/contact'){
        res.statusCode=200;
        res.setHeader("content-type","application/json")
        res.end("Contact Page");
    }
    else{
        res.statusCode=500;
        res.setHeader("Content-Type","text/plain");
        res.end("Page not found!");

    }
});
server.listen(port,()=>{
    console.log(`server running at ${hostname}:${port}`);

})