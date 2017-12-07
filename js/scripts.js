//Back End Logic

var numberToRomanNumeral = function(inputNumberStr) {
  inputNumber = parseInt(inputNumberStr);
  var symbols = ["I", "V", "X", "L", "C", "D", "M"];
  var keyNumbersStr = ["1", "5", "10", "50", "100", "500", "1000"];
  var keyNumbers = [1, 5, 10, 50, 100, 500, 1000];
  var result = "";

  if (!(inputNumberStr.match(/[0-9]/))) {
    return "Error!";
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
    for(var k = 0; k < 20; k++) {
      for (var i = 0; i < symbols.length; i++) { // second loop (nested loop)
        var j = symbols.length - 1 - i;// - 1 means start at the 6th symbol - -1 means reverse the order
        if (inputNumber >= keyNumbers[j]) {
          result += symbols[j]; // concatinate L to result
          inputNumber = inputNumber - keyNumbers[j]; //90 - 50(l)
          if ((inputNumber - keyNumbers[j]) === 0) {
            k = 20; // stops the parent loop
          }
          break;
        }
      }
    }
  }
  return result;
}


//User Interface
$(document).ready(function() {
  $("form#romanForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = $("#number").val();   //Input
    var result = numberToRomanNumeral(inputNumber); //box containing input
    $("#result").text(result)  //send result to user


  });
});
