/**
 * Module dependencies.
 */

var toString = Object.prototype.toString;

/**
 * Expose.
 */

module.exports = {

  /**
   * Returns `true` if the passed value is an email.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isEmail: function (value) {
    return "string" === typeof value && /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(value);
  },

  /**
   * Returns `true` if the passed value is an Array.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isArray: ("isArray" in Array) ? Array.isArray : function (value) {
    return toString.call(value) === "[object Array]";
  },

  /**
   * Returns `true` if the passed value is empty.
   *
   * @param {Object} value The value to test.
   * @param {Boolean} allowEmptyString
   * @return {Boolean}
   */

  isEmpty: function (value, allowEmptyString) {
    return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || (this.isArray(value) && value.length === 0);
  },

  /**
   * Returns `true` if the passed value is a Date.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isDate: function (value) {
    return toString.call(value) === "[object Date]";
  },

  /**
   * Returns `true` is the passed value is a String.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isString: function (value) {
    return "string" == typeof value;
  },

  /**
   * Returns `true` if the passed value is a Boolean.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isBoolean: function(value) {
      return typeof value === 'boolean';
  },

  /**
   * Returns `true` if the passed value is a JavaScript Object, `false` otherwise.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isObject: (toString.call(null) === '[object Object]') ?
  function(value) {
      // check ownerDocument here as well to exclude DOM nodes
      return value !== null && value !== undefined && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
  } :
  function(value) {
      return toString.call(value) === '[object Object]';
  },

  /**
   * Returns `true` if the passed value is a simple Object.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isSimpleObject: function(value) {
      return value instanceof Object && value.constructor === Object;
  },

  /**
   * Returns `true` if the passed value is a JavaScript 'primitive', a string, number or Boolean.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isPrimitive: function(value) {
      var type = typeof value;

      return type === 'string' || type === 'number' || type === 'boolean';
  },

  /**
   * Returns `true` if the passed value is a JavaScript Function, `false` otherwise.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isFunction:
  // Safari 3.x and 4.x returns 'function' for typeof <NodeList>, hence we need to fall back to using
  // Object.prorotype.toString (slower)
  (typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function') ? function(value) {
      return toString.call(value) === '[object Function]';
  } : function(value) {
      return typeof value === 'function';
  },

  /**
   * Returns `true` if the passed value is a number. Returns `false` for non-finite numbers.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isNumber: function(value) {
      return typeof value === 'number' && isFinite(value);
  },

  /**
   * Returns `true` if the passed value is numeric.
   *
   * @param {Object} value Examples: 1, '1', '2.34'
   * @return {Boolean} `true` if numeric, `false` otherwise.
   */

  isNumeric: function(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
  },

  /**
   * Returns `true` if the passed value is an HTMLElement.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isElement: function(value) {
      return value ? value.nodeType === 1 : false;
  },

  /**
   * Returns `true` if the passed value is a TextNode.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isTextNode: function(value) {
      return value ? value.nodeName === "#text" : false;
  },

  /**
   * Returns `true` if the passed value is defined.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */

  isDefined: function(value) {
      return typeof value !== 'undefined';
  },

  /**
   * Returns `true` if the passed value is iterable, `false` otherwise.
   *
   * @param {Object} value The value to test.
   * @return {Boolean}
   */
   
  isIterable: function(value) {
      return (value && typeof value !== 'string') ? value.length !== undefined : false;
  }

};
