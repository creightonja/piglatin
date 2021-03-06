var vowels = ["a", "e", "i", "o", "u", "y"];

function pigLatin(word) {
  var chars = word.split('');
  var length = word.length;
  var vowelcounter = 0;
  var lettercounter = 0;
  var truncate = [];

  //running through input word
  for (var i = 0; i < length; i++){
    //checking vowel match
    for (var j = 6; j >= 0; j--){
      //if vowel matches add to vowel counter
      if (chars[i] == vowels[j]){
        vowelcounter++;
      }
    }
    //Checking if first letter is a Y. Setting vowelcounter to 0
    if ((chars[i] == "y") && (lettercounter == 0)) {
      vowelcounter = 0;
    }

    //Checking for first letter of word and vowel, return word + "ay"
    if ((vowelcounter == 1) && (lettercounter == 0)){
      var pigword = word + "ay";
      return pigword;
    }

    //Checking letter to see if vowel
    else if (vowelcounter == 1){
        //Checking vowel to see if "u" for qu match
        if (chars[i] == "u"){
          //Creating test to see if preceded by "q";
          var testletter = chars[i-1] + chars[i];
          //Checking test letter for "qu" match
          if (testletter == "qu"){
            //If qu is a match, add "u" to the truncate array
            truncate.push(chars[i]);
            //If not "qu", join the truncate array
            var joinedTruncate = truncate.join('');
            //Remove the truncated characters
            chars.splice(0, (i+1));
            //Join the array after removing the characters
            var joinedChars = chars.join('');
            //Concatanate the arrays together with "ay";
            var pigword = joinedChars + joinedTruncate + "ay";
            return pigword;
          }
        }

        //Repeat qu process
        var joinedTruncate = truncate.join('');
        chars.splice(0, i);
        var joinedChars = chars.join('');
        var pigword = joinedChars + joinedTruncate + "ay";
        return pigword;

    //Add consonant to truncate array
    } else {
        truncate.push(chars[i]);
    }
    lettercounter++;
  }

  return pigword;
}

function wordSplit(words){
  var wordArray = [];  //set word Array to empty array
  var removePunctuation = words.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");  //removing punctuation
  var lowerWords = removePunctuation.toLowerCase();  //convert to lower
  var splitWords = lowerWords.split(' ');  //split the words by ' '
  var length = splitWords.length;  //get length
  for (var i = 0; i < length; i++) { //loop through word array
    var word = pigLatin(splitWords[i]);  //use word array at index i
    wordArray.push(word);  //add returned pig word to pig array
  }
  var pigWords = wordArray.join(' ');  //Rejoin words into a string
  return pigWords;  //return the sentence
};





$(document).ready(function() {
  $("form#pigwords").submit(function(event) {
    var words = $("input#words").val();
    // console.log(words);
    var pigWords = wordSplit(words);
    $(".english").empty();
    $(".english").text(words);

    $(".piglatin").empty();
    $(".piglatin").text(pigWords);

    $(".showme").show();
    event.preventDefault();
  });
});
