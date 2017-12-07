//Back End Logic

var numberToRomanNumeral = function(inputNumber) {
  if (!(inputNumber.match(/[0-9]/))) {
    return "Error!";
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
