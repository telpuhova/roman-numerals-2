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
    for (var i = 0; i < keyNumbersStr.length; i++) {
      if (this.decimalStr === keyNumbersStr[i]) {
        this.romanNumeral = symbols[i];
        return 0;
      }
    }

    for(var k = 0; k < 20; k++) {
      for (var i = symbols.length; i =  0; i--) {
        if (this.decimal >= keyNumbers[i]) {
          result += symbols[i];
          this.decimal = this.decimal - keyNumbers[i];
          if ((this.decimal - keyNumbers[i]) === 0) {
            k = 18;
          }
          break;
        }
      }
    }
  }

  this.romanNumeral = result;
  return 0;
}

exports.romanNumeralsModule = RomanNumeral;
