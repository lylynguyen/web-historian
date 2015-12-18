var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelpers = require('./http-helpers');
var htmlAsset = archive.paths.siteAssets + '/index.html';

// require more modules/folders here!

//get post

exports.handleRequest = function (req, res) {
  if(req.method === 'GET'){
    if(req.url.indexOf("w") != -1){ 
      httpHelpers.serveAssets(res, archive.paths.archivedSites + req.url);
    }
    else if(req.url === '/'){
      httpHelpers.serveAssets(res,htmlAsset);
    }
    else {
      res.writeHead(404);
      res.end();
    }
  }
  else if (req.method === 'POST'){
    
    // httpHelpers.serveAssets(res,archive.paths.siteAssets + "/loading.html");
    var body = '';
    var url;
    req.on('data', function(data){
      body += data;
    });
    req.on('end', function(){
      url = body.substr(4) + '\n';
     fs.appendFile(archive.paths.list, url, function(err){
      if(err){
        throw error;
      }
      httpHelpers.serveAssets(res, archive.paths.list, 302);
     }); 
    });
  }  
};


  