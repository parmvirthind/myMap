var words = ["ground", "control", "to", "major", "tom"];

// function capitalize(arrayOfWords) {
//   var newArray = [];
//   for(i = 0; i < arrayOfWords.length; i++) {
//   newArray = arrayOfWords[i].toUpperCase();
//   }
//   return newArray;
// };

function myMap(arr, cb) {
  var newArray = [];
  arr.forEach(function(word) {
    newArray.push(cb(word));
  });
  return newArray;
};

var consolelog = myMap(words, function(blah) {
  return blah.toUpperCase();
});

console.log(consolelog);