const assert = require('assert');
const Order = require('./replaceWithTempRefactored.js');

// Mocha testing
describe('order', function(){
  it('should calculate correct price', function(){
    const order = new Order(5, {"price":40});
    assert.equal(order.price, 196);    
  })
})
