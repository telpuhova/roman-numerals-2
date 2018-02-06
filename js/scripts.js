//Back End Logic

var numberToRomanNumeral = function(inputNumberStr) {
  inputNumber = parseInt(inputNumberStr);
  // var symbols = ["I", "V", "X", "L", "C", "D", "M"];
  // var keyNumbersStr = ["1", "5", "10", "50", "100", "500", "1000"];
  var symbols = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var keyNumbersStr = ["1", "4", "5", "9", "10", "40", "50", "90", "100", "400", "500", "900", "1000"];
  // var keyNumbers = [1, 5, 10, 50, 100, 500, 1000];
  var keyNumbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var result = "";

  if (!(inputNumberStr.match(/[0-9]/))) {
    return "Error!";
  } else if (inputNumber >= 4000) {
      return "Error, not a Roman Numeral!";
  }
  else {
    for (var i = 0; i < keyNumbersStr.length; i++) { //first loop
      if (inputNumberStr === keyNumbersStr[i]) {
        return symbols[i];
      }
    }

    //1 iteration: inputNumber= 90-50=40
    //result = L
    //2 iteration: inputNumber= 40-10=30
    //result = LX
    //3 iteration: inputNumber= 30-10=20
    //result = LXX
    //4 iteration: inputNumber= 20-10=10
    //result = LXXX !
    //5 iteration: inputNumber= 10-10=0
    for(var k = 0; k < 20; k++) { //parent loop stop at 20 because var is set to
      for (var i = 0; i < symbols.length; i++) { // second loop (nested loop) or you can use     (var i = symbols.length; i =  0; i--)
        var j = symbols.length - 1 - i;// - 1 means start at the 6th symbol - 1 to equal the total and -1 means reverse the order
        if (inputNumber >= keyNumbers[j]) {
          result += symbols[j]; // concatinate L to result
          inputNumber = inputNumber - keyNumbers[j]; //90 - 50(l)
          if ((inputNumber - keyNumbers[j]) === 0) {
            k = 18; // stops the parent loop 3,999 converted into roman numerals characters
          }
          break;
        }
      }
    }
  }
  return result;
}

function checkInput(input) {
  if (input.match(/[0-9]/)) {
   return true;
}  else {
     return false;
   }
}

//User Interface
$(document).ready(function() {
  $("form#romanForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = $("#number").val();
    var checker = checkInput(inputNumber)

    if (checker === true) {

      var result = numberToRomanNumeral(inputNumber); //box containing input
      $("#result").text(result)  //send result to user
    }
    else {
      $("#result").text("Not a number!")
    }
  });
});
