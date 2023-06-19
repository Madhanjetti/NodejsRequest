const http=require('http');
const port=3015;
const hostname='localhost';
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("content-Type","text/plain");
    res.end(JSON.stringify({"mentor":"chirag Goel"}));
    res.end('welcome to pw skills by Madhan')
});
server.listen(port,()=>{
    console.log(`server running at ${hostname}:${port}`);
})