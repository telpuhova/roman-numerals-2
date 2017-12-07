//Back End Logic

var numberToRomanNumeral = function(inputNumber) {
  // inputNumber = parseInt(inputNumber);
  var symbols = ["I", "V", "X", "L", "C", "D", "M"];
  var keyNumbers = ["1", "5", "10", "50", "100", "500", "1000"];

  if (!(inputNumber.match(/[0-9]/))) {
    return "Error!";
  }
  else {
    for (var i = 0; i < keyNumbers.length; i++) {
      if (inputNumber === keyNumbers[i]) {
        return symbols[i];
      }
    }
  }
  return "I";
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
