const { spy } = require("sinon");
let chai = require("chai");
let expect = chai.expect;
const { stringCalculator } = require("../src/string-calculator");

const spies = { write: spy() };

describe("StringCalculator", function() {
  it("mocks", () => {
      stringCalculator(spies).add("")
      expect(spies.write.calledWith(0)).to.equal(true)
  });
});
