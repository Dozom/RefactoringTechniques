const assert = require('assert')
const circum = require('./changeFunctionDeclaration.js')

describe('circum', function(){
  it('should return the correct circumference', function(){
    const circumference = circum(4);
    assert.equal(circumference, 25.13)
  })
})
