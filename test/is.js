/**
 * Module dependencies.
 */

var is = require("is")
  , chai = require("chai")
  , expect = chai.expect;

describe("is", function () {

  describe("isEmail()", function () {
    it("should return boolean", function () {
      expect(is.isEmail(123)).to.be.a("boolean");
    });

    it("should be an email", function () {
      expect(is.isEmail("debianw@gmail.com")).to.equal(true);
    });

    it("should not be an email", function () {
      expect(is.isEmail("test@..")).to.equal(false);
    });
  });

  describe("isArray()", function () {
    it("should return boolean", function () {
      expect(is.isArray(123)).to.be.a("boolean");
    });

    it("should be an Array", function () {
      expect(is.isArray([123])).to.equal(true);
    });

    it("should not be an Array", function () {
      expect(is.isArray("[123]")).to.equal(false);
    });
  });

});