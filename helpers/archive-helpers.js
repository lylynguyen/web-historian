var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = require('request');

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

exports.readListOfUrls = function(cbOnRead) { 
  fs.readFile(paths.list, 'utf-8', function (err, data){
    if(err){return;}
    var result = data.split("\n");
    cbOnRead(result);
  });

};

exports.isUrlInList = function(target, cbOnList) {
  exports.readListOfUrls(function(result){
    results = _.contains(target);
      cbOnList(results);
    }
  );
};

exports.addUrlToList = function(url, cbOnAddUrl) {
  // exports.readListOfUrls(function(result){
  //   result = result.push(url);
  //   cbOnAddUrl(result);
  // });
  fs.appendFile(exports.paths.list, url + '\n', function(err, file) {
    cbOnAddUrl();
  });
  
};

exports.isUrlArchived = function(path, callback) {
  path = '/' + path;
  fs.exists(paths.archivedSites + path, function(exists){
    if(exists) {
      callback(exists);
    } else{
      callback(!exists);
    }

  });
};

exports.downloadUrls = function(arraySites) {
  // _.each(arraySites, function(val){
  //  fs.open(paths.archivedSites + '/' + val, 'w');
  //  });
    _.each(arraySites, function (url) {
    if (!url) { return; }
    request('http://' + url).pipe(fs.createWriteStream(exports.paths.archivedSites + "/" + url));
  });

};
