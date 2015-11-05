var assert = require('chai').assert
var check = require('../index.js')

describe('number checks', function () {
  it('check if integer', function (done) {
    assert.isTrue(check.isInteger(5))
    done()
  })
  it('check if number', function (done) {
    assert.isTrue(check.isNumber(5))
    done()
  })
  it('check if array', function (done) {
    assert.isTrue(check.isArray([5, 3, 666]))
    done()
  })
})
describe('string checks', function () {
  it('check if variable is a string', function (done) {
    assert.isTrue(check.isString('walid'))
    done()
  })
  it('check if string is lowercase', function (done) {
    assert.isTrue(check.isLowerCase('walid'))
    done()
  })
  it('check if string if is uppercase', function (done) {
    assert.isTrue(check.isUpperCase('WALID'))
    done()
  })
  it('check if string is regex', function (done) {
    assert.isTrue(check.isRegex('/^beep$/'))
    done()
  })
})
describe('address checks', function () {
  it('check if ip address', function (done) {
    assert.isTrue(check.isIPAddress('127.0.0.1'))
    done()
  })
  it('check if email address', function (done) {
    assert.isTrue(check.isEmailAddress('walid.sa3d@gmail.com'))
    done()
  })
})
