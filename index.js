const fs = require('fs');
const filename = './words.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  var arr = data.split('\n');
  if (arr[arr.length - 1] === "") {
    arr.pop();
  }

  // add characters in gray here
  var not_present = [
    'b',
    'l',
    'a',
    's',
    't',
  ];
  
  // add characters in green / yellow here
  // if green, set pos to true
  // if yellow, set pos to false
  var present = [
    {
      char: 'p',
      pos: true,
    },
    {
      char: 'o',
      pos: false,
    },
    {
      char: '',
      pos: null,
    },
    {
      char: '',
      pos: null,
    },
    {
      char: '',
      pos: null,
    },
  ];

  var len = present.length;
 
  // filtered array of words
  var filtered = arr.filter((word) => {

    // initialize remaining chars to empty, add chars here
    // after we've done an initial pass and we know that the
    // char is in the word, but the position is unkown
    var remaining = [];
    
    // walk over each character in the word
    for (var i = 0; i < len; i++) {
      var char = word[i];

      // we know this char is not present so filter immediatle
      if (not_present.includes(char)) {
        return false
      }

      // walk over the present array of objects
      for (var j = 0; j < len; j++) {
        var obj = present[i];

        // we know the char is present and we know it's position
        if (obj.pos) {
          if (obj.char !== char) {
            return false;
          }
        }
        
        // we know the char is present, but we do not know the position
        if (obj.pos === false) {
          if (i === j && obj.char === word[i]) {
            return false
          }
        }
      }

      // get array of characters we know must exist in the word
      remaining = present.filter((p) => p.pos === false).map((obj) => obj.char);
    }
    
    // walk over remaining characters, and filter words that do not have these
    for (var k = 0; k < remaining.length; k++) {
      if (!word.includes(remaining[k])) {
        return false;
      }
    }
    return true;
  });

  filtered.sort();
  console.log(filtered, filtered.length);
});