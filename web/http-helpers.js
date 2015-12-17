var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');


exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  // var html = '';
  fs.readFile(asset, function(err, data){
    // var html = data;
    
    res.writeHead(200, headers);  
  //      // httphelpers.serveAssets(res, htmlAsset);
  res.write(data);
        res.end();
      }
  );
};



// As you progress, keep thinking about what helper functions you can put here!
  // fs.readFile(siteAssets.path + '/' + assets, function (err, data) {
  //   if(err){
  //     throw err;
  //   }
  //   callback(data);
  // });
