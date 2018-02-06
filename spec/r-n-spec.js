var RomanNumeral = require('./../js/roman-numerals.js').romanNumeralsModule;

describe('roman-numeral', function() {
  it('should test if romanNumeral is created correctly', function() {
    var romanNumeral = new RomanNumeral("4");
    expect(romanNumeral.decimalStr).toEqual("4");
    expect(romanNumeral.decimal).toEqual(4);
    expect(romanNumeral.romanNumeral).toEqual("");
  });

  it('should test if romanNumeralromanNumeral is set correctly', function() {
    var romanNumeral = new RomanNumeral("9");
    romanNumeral.setRomanNumeral();
    expect(romanNumeral.getRomanNumeral()).toEqual("IX");
  });
});
