const http = require('http');

const httpServer = http.createServer(function (req, res)
   {
       if (req.url === '/math') { 
	   
	   res.writeHead(200, {'Content-Type' : 'text/plain'});
	   res.write('Welcome to hell :##');
	   res.end('Continue ?');
	   }
	   else if (req.url === '/dendi')
	   {
		    res.writeHead(200, {'Content-Type' : 'text/plain'});
		   res.end("sPERs");
		   
	   }
	    else if (req.url === '/siny')
	   {
		    res.writeHead(200, {'Content-Type' : 'text/plain'});
		   res.end("COXS");
		   
	   }
	    else if (req.url === '/gogo')
	   {
		    res.writeHead(200, {'Content-Type' : 'text/plain'});
		   res.end( "BAREV");
		   
	   }
	    else if (req.url === '/tolya')
	   {
		    res.writeHead(200, {'Content-Type' : 'text/plain'});
		   res.end("DZEZ ?????????");
		   
	   }
	   else
	   {
	    res.writeHead(200, {'Content-Type' : 'text/plain'});
	   res.write('Maybe you must type another address ?');
	   res.end('Continue?');
	   }
	   

   });
   httpServer.listen(3001);