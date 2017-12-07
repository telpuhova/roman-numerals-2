//User Interface
$(document).ready(function() {
  $("form#romanForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = $("#number").val();   //Input
    var result = numberToRomanNumeral(inputNumber); //box containing input
    $("#result").text(result)  //send result to user


  });
});

//Back End Logic
