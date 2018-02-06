var RomanNumeral = function(number) {
  this.decimalStr = number;
  this.decimal = parseInt(number);
  this.romanNumeral = "";
}

RomanNumeral.prototype.getRomanNumeral = function() {
  return this.romanNumeral;
}

RomanNumeral.prototype.setRomanNumeral = function() {

  var symbols = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var keyNumbersStr = ["1", "4", "5", "9", "10", "40", "50", "90", "100", "400", "500", "900", "1000"];
  var keyNumbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var result = "";

  if (!(this.decimalStr.match(/[0-9]/))) {
    this.romanNumeral = "Error!";
    return 1;
  } else if (this.decimal >= 4000) {
      this.romanNumeral = "Error, not a Roman Numeral!";
      return 1;
  }
  else {
    for (var i = 0; i < keyNumbersStr.length; i++) { //first loop
      if (this.decimalStr === keyNumbersStr[i]) {
        this.romanNumeral = symbols[i];
        return 0;
      }
    }

    for(var k = 0; k < 20; k++) { //parent loop stop at 20 because var is set to
      for (var i = 0; i < symbols.length; i++) { // second loop (nested loop) or you can use     (var i = symbols.length; i =  0; i--)
        var j = symbols.length - 1 - i;// - 1 means start at the 6th symbol - 1 to equal the total and -1 means reverse the order
        if (this.decimal >= keyNumbers[j]) {
          result += symbols[j]; // concatinate L to result
          this.decimal = this.decimal - keyNumbers[j]; //90 - 50(l)
          if ((this.decimal - keyNumbers[j]) === 0) {
            k = 18; // stops the parent loop 3,999 converted into roman numerals characters
          }
          break;
        }
      }
    }
  }
  // return result;
  this.romanNumeral = result;
  return 0;
}

exports.romanNumeralsModule = RomanNumeral;
