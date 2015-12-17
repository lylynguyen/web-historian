var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = paths ={
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../web/archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) { 
  // var fixtureName = "www.google.com"
  console.log("data is here too", paths.list);
  // console.log("res:"res);
  fs.readFile(paths.list, 'utf-8', function (err, data){
    // console.log("data magically appears", data
    var result = data.split("\n");
    callback(result);
    
  });
};

exports.isUrlInList = function(target, callback) {
  exports.readListOfUrls(function(result){
    results = _.contains(target);
      callback(results);
    }
  );
};

exports.addUrlToList = function(url, callback) {
  exports.readListOfUrls(function(result){
    result = result.push(url);
    callback(result);
  });
};

exports.isUrlArchived = function() {
};

exports.downloadUrls = function() {
};
