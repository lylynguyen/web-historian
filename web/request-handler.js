var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require("fs")
var httpHelpers = require('./http-helpers')
// require more modules/folders here!


exports.handleRequest = function (req, res) {
  // fs.exists(absPath,)
  // console.log("helps:" ,httpHelpers)
  res.writeHeader(200, httpHelpers.headers)
  console.log("probs: ",httpHelpers.serveAssets())
  res.write(httpHelpers.serveAssets())
  // console.log("req:",req,"res: ",res)
  res.end(archive.paths.list);
};
