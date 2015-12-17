var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelpers = require('./http-helpers');
var htmlAsset = archive.paths.siteAssets + '/index.html';

// require more modules/folders here!

//get post

exports.handleRequest = function (req, res) {
  if(req.method === 'GET'){
    if(req.url === "/"){
      console.log("url",req.url)
      httpHelpers.serveAssets(res,htmlAsset);
      console.log("handlereq:",htmlAsset)
    } else{
     res.writeHead(404);
     res.end("Error!"); 
    } 
  }
};
  
    //   archive.readListOfUrls(req);
    //   return res;
    //   console.log("run");
    // }
  // if(req.url === '/' ) {
  //   // if(req.method === 'GET'){
  //     // httpHelpers.serveAssets(res, htmlAsset);
  //     fs.readFile(htmlAsset, function (error, data){
  //       if(error){return;}
  //       res.writeHead(200, httpHelpers.headers)
  //       res.end()
  //     })
  //   // }
  // }


  // res.end(archive.paths.list);
