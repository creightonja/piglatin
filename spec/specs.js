describe('pigLatin', function() {
  it("For words that start with a vowel, add ay to the end", function() {
    expect(pigLatin("u")).to.equal("uay");
  });

  it("For words that start with a consonant 'cat', add them to the end of the word and add ay 'atcay'", function() {
    expect(pigLatin("cat")).to.equal("atcay");
  });

  it("For words that contain 'qu' 'squeal', add them to the end of the word and add ay 'ealsquay'", function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });

  it("Scram should equal amscray", function() {
    expect(pigLatin("scram")).to.equal("amscray");
  });

  it("Year should equal earyay", function() {
    expect(pigLatin("year")).to.equal("earyay");
  });

  it("Fly should equal yflay", function() {
    expect(pigLatin("fly")).to.equal("yflay");
  });

  it("Fly to the moon should equal yflay otay ethay oonmay", function() {
    expect(pigLatin("fly to the moon")).to.equal("yflay otay ethay oonmay");
  });

});
