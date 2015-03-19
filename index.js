// Created by SharpCoder
//
// This project aims to open up multiple
// linguistic functions available from the
// moby project. More information available
// here: http://icon.shef.ac.uk/Moby/

(function() {

  var fs = require('fs');
  var dictionary = {};
  var file = __dirname + '/mobypos.txt';

  // Read the file (synchronously, for now).
  var data = fs.readFileSync(file).toString("utf8");

  // Get some parse variables.
  var word = '', type = '';
  var half = false;

  // Parse the file into the dictionary.
  for ( var i = 0; i < data.length; i++ ) {

    // Get the character we're parsing.
    var c = data.charCodeAt(i);

    // Now figure out what to do with it.
    if ( c == 215 )
    {
      half = true;
    }
    else if ( c == 13 )
    {
      dictionary[word] = type;
      word = '';
      type = '';
      half = false;
    }
    else if ( half )
    {
      type += data[i];
    }
    else
    {
      word += data[i];
    }
  }

  exports.search = function(val) {
    return dictionary[val];
  };

})();
