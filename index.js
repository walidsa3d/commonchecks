var urlREGEX = require('url-regex')
var emailREGEX = require('email-regex')
var ipREGEX = require('ip-regex')
var reREGEX = require('regex-regex')
var fs = require('fs')

module.exports = {
  isFile: function (variable) {
    return fs.lstatSync(variable).isFile()
  },
  isURL: function (variable) {
    return urlREGEX().test(variable)
  },
  isString: function (variable) {
    return typeof variable === 'string'
  },
  isNumber: function (variable) {
    return typeof variable === 'number'
  },
  isInteger: function (variable) {
    return this.isNumber(variable) && variable % 1 === 0
  },
  isFloat: function (variable) {
    return variable === this.isNumber(variable) && variable % 1 !== 0
  },

  isLowerCase: function (variable) {
    return variable === variable.toLowerCase()
  },
  isUpperCase: function (variable) {
    return variable === variable.toUpperCase()
  },
  isRegex: function (variable) {
    return reREGEX.test(variable)
  },
  isDir: function (variable) {
    return fs.lstatSync(variable).isDirectory()
  },
  isEmailAddress: function (variable) {
    return emailREGEX().test(variable)
  },
  isIPAddress: function (variable) {
    return ipREGEX().test(variable)
  },
  isArray: function (variable) {
    return Array.isArray(variable)
  }
}
