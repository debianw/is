/**
 * Module dependencies.
 */
var is;

// for component
try {
  is = require("is");
}

// for npm module
catch(e) {
  is = require("..");
}

var chai = require("chai");
var expect = chai.expect;

describe("is", function () {

  // isEmail
  describe("isEmail()", function () {
    it("should be an email", function () {
      expect(is.isEmail("debianw@gmail.com")).to.equal(true);
    });

    it("should not be an email", function () {
      expect(is.isEmail("test@..")).to.equal(false);
    });
  });

  // isArray
  describe("isArray()", function () {
    it("should be an Array", function () {
      expect(is.isArray([123])).to.equal(true);
      expect(is.isArray([])).to.equal(true);
      expect(is.isArray(new Array)).to.equal(true);
    });

    it("should not be an Array", function () {
      expect(is.isArray("[123]")).to.equal(false);
    });
  });

  // isEmpty
  describe("isEmpty()", function () {
    it("should be empty", function () {
      expect(is.isEmpty([])).to.equal(true);
      expect(is.isEmpty("")).to.equal(true);
      expect(is.isEmpty(" ")).to.equal(true);
      expect(is.isEmpty(null)).to.equal(true);
      expect(is.isEmpty(undefined)).to.equal(true);
    });

    it("should not be empty", function () {
      expect(is.isEmpty([123])).to.equal(false);
      expect(is.isEmpty(".")).to.equal(false);
      expect(is.isEmpty(" ", true)).to.equal(false);
      expect(is.isEmpty(0)).to.equal(false);
      expect(is.isEmpty({})).to.equal(false);
    });
  });

  // isDate
  describe("isDate()", function () {
    it("should return boolean", function () {
      expect(is.isEmpty(123)).to.be.a("boolean");
    });

    it("should be a Date", function () {
      expect(is.isDate(new Date)).to.be.equal(true);
    });

    it("should not be a Date", function () {
      expect(is.isDate(Date.now())).to.be.equal(false);
    });
  });

  // isString
  describe("isString()", function () {
    it("should be a String", function () {
      expect(is.isString("")).to.be.equal(true);
      expect(is.isString((123).toString())).to.be.equal(true);
    });

    it("should not be a String", function () {
      expect(is.isString(1)).to.be.equal(false);
    });
  });

  // isBoolean
  describe("isBoolean()", function () {
    it("should be a Boolean", function () {
      expect(is.isBoolean(true)).to.be.equal(true);
      expect(is.isBoolean(1 === 1)).to.be.equal(true);
    });

    it("should not be a Boolean", function () {
      expect(is.isBoolean("true")).to.be.equal(false);
      expect(is.isBoolean("false")).to.be.equal(false);
    });
  });

  // isObject
  describe("isObject()", function () {
    it("should be a Object", function () {
      expect(is.isObject({})).to.be.equal(true);
      expect(is.isObject(new Object())).to.be.equal(true);
      expect(is.isObject(this)).to.be.equal(true);
    });

    it("should not be a Object", function () {
      expect(is.isObject("{}")).to.be.equal(false);
    });
  });

});