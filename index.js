var urlREGEX = require('url-regex')
var emailREGEX = require('email-regex')
var ipREGEX = require('ip-regex')
var reREGEX = require('regex-regex')
var fs = require('fs')

var isFile = function (variable) {
  return fs.lstatSync(variable).isFile()
}
var isURL = function (variable) {
  return urlREGEX().test(variable)
}
var isString = function (variable) {
  return typeof variable === 'string'
}
var isNumber = function (variable) {
  return typeof variable === 'number'
}
var isInteger = function (variable) {
  return isNumber(variable) && variable % 1 === 0
}
var isFloat = function (variable) {
  return variable === isNumber(variable) && variable % 1 !== 0
}

var isLowerCase = function (variable) {
  return variable === variable.toLowerCase()
}
var isUpperCase = function (variable) {
  return variable === variable.toUpperCase()
}
var isRegex = function (variable) {
  return reREGEX.test(variable)
}
var isDir = function (variable) {
  return fs.lstatSync(variable).isDirectory()
}
var isEmailAddress = function (variable) {
  return emailREGEX().test(variable)
}
var isIPAddress = function (variable) {
  return ipREGEX().test(variable)
}
var isArray = function (variable) {
  return Array.isArray(variable)
}

module.exports.isFile = isFile
module.exports.isDir = isDir
module.exports.isString = isString
module.exports.isLowerCase = isLowerCase
module.exports.isUpperCase = isUpperCase
module.exports.isNumber = isNumber
module.exports.isInteger = isInteger
module.exports.isFloat = isFloat
module.exports.isURL = isURL
module.exports.isEmailAddress = isEmailAddress
module.exports.isIPAddress = isIPAddress
module.exports.isArray = isArray
module.exports.isRegex = isRegex
