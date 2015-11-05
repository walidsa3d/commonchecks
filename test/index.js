var assert = require('chai').assert
var is = require('../index.js')

describe('number checks', function () {
  it('check if integer', function (done) {
    assert.isTrue(is.Integer(5))
    done()
  })
  it('check if number', function (done) {
    assert.isTrue(is.Number(5))
    done()
  })
  it('check if array', function (done) {
    assert.isTrue(is.Array([5, 3, 666]))
    done()
  })
})
describe('string checks', function () {
  it('check if variable is a string', function (done) {
    assert.isTrue(is.String('walid'))
    done()
  })
  it('check if string is lowercase', function (done) {
    assert.isTrue(is.LowerCase('walid'))
    done()
  })
  it('check if string if is uppercase', function (done) {
    assert.isTrue(is.UpperCase('WALID'))
    done()
  })
  it('check if string is regex', function (done) {
    assert.isTrue(is.Regex('/^beep$/'))
    done()
  })
})
describe('address checks', function () {
  it('check if ip address', function (done) {
    assert.isTrue(is.IPAddress('127.0.0.1'))
    done()
  })
  it('check if email address', function (done) {
    assert.isTrue(is.EmailAddress('walid.sa3d@gmail.com'))
    done()
  })
  it('check if url', function (done) {
    assert.isTrue(is.URL('http://google.com'))
    done()
  })
})
