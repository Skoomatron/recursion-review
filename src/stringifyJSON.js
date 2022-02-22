// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //base cases
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  }

  if (obj === undefined) {
    return 'null';
  }


  //array
  var arrayResult = [];
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    for (var x = 0; x < obj.length; x++) {
      arrayResult.push(stringifyJSON(obj[x]));
    }
    return '[' + arrayResult + ']';
  }

  //obj
  var objResult = {};
  if (typeof obj === 'object') {
    if (obj === undefined) {
      return '{}';
    }
    for (var key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
        objResult[key] = stringifyJSON(obj[key]);
      }
    }
    return '' + objResult;
  }
// testing

};
