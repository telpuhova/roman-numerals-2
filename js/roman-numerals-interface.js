function checkInput(input) {
  if (input.match(/[0-9]/)) {
   return true;
}  else {
     return false;
   }
}

$(document).ready(function() {
  $("form#romanForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = $("#number").val();
    var checker = checkInput(inputNumber);

    if (checker === true) {

      var result = numberToRomanNumeral(inputNumber);
      $("#result").text(result);
    }
    else {
      $("#result").text("Not a number!");
    }
  });
});
