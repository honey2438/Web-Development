const http=require('http');
const fs=require('fs');
const hostname='127.0.0.1';
const port=3000;
const home=fs.readFileSync('navbar.html');
const about=fs.readFileSync('Portfolio.html');
const services=fs.readFileSync('gymwebsite.html');
const contact=fs.readFileSync('registrationform.html');
const server= http.createServer((req,res)=>{
    url=req.url;
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    if(url=='/'){
        res.end(home);
    }
    else if(url=='/Portfolio.html'){
        res.end(about);
    }
    else if(url=='/gymwebsite.html'){
        res.end(services);
    }
    else if(url=='/registrationform.html'){
        res.end(contact);
    }
    else{
        res.statusCode=404;
        res.end("<h1>404 page not found</h1>");
    }
});
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});

