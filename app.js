/**
 * Created by heriipurnama on 17/10/15.
 */
var http = require ('http');

http.createServer(function(req,res) {
    if(req.url != "/favicon.ico"){ //handle request

    console.log(req.url);

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("hello form nodejs server\n");
        res.write("you req :"+req.url);
             res.end();
}
}).listen(8888);


console.log("server running di port 8888");
