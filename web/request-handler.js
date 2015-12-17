var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelpers = require('./http-helpers');
var htmlAsset = archive.paths.siteAssets + '/index.html';

// require more modules/folders here!

//get post

exports.handleRequest = function (req, res) {
  if(req.method === 'GET'){
      console.log("url",req.url);
    if(req.url === "/"){
      
      httpHelpers.serveAssets(res,htmlAsset);
      // console.log("handlereq:",htmlAsset)
    } else{
     res.writeHead(404);
     res.end("Error!"); 
    } 
  }
};
  



  // res.end(archive.paths.list);
