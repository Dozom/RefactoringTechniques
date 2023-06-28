const assert = require('assert')
const circumference = require('./changeFunctionDeclaration.js')

describe('circumference', function(){
  it('should return the correct circumference', function(){
    const circumferenceObj = circumference(4);
    assert.equal(circumferenceObj, 25.13)
  })
})
