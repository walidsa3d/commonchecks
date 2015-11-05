var urlREGEX = require('url-regex')
var emailREGEX = require('email-regex')
var ipREGEX = require('ip-regex')
var reREGEX = require('regex-regex')
var fs = require('fs')

module.exports = {
  File: function (variable) {
    return fs.lstatSync(variable).isFile()
  },
  URL: function (variable) {
    return urlREGEX().test(variable)
  },
  String: function (variable) {
    return typeof variable === 'string'
  },
  Number: function (variable) {
    return typeof variable === 'number'
  },
  Integer: function (variable) {
    return this.Number(variable) && variable % 1 === 0
  },
  Float: function (variable) {
    return variable === this.isNumber(variable) && variable % 1 !== 0
  },

  LowerCase: function (variable) {
    return variable === variable.toLowerCase()
  },
  UpperCase: function (variable) {
    return variable === variable.toUpperCase()
  },
  Regex: function (variable) {
    return reREGEX.test(variable)
  },
  Dir: function (variable) {
    return fs.lstatSync(variable).isDirectory()
  },
  EmailAddress: function (variable) {
    return emailREGEX().test(variable)
  },
  IPAddress: function (variable) {
    return ipREGEX().test(variable)
  },
  Array: function (variable) {
    return Array.isArray(variable)
  }
}
