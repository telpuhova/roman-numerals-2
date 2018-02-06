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
      var romanNumeral = new RomanNumeral(inputNumber);
      romanNumeral.setRomanNumeral();
      var result = romanNumeral.getRomanNumeral();
      $("#result").text(result);
    }
    else {
      $("#result").text("Not a number!");
    }
  });
});
