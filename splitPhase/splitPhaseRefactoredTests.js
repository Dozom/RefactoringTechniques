/*
* Split phase
* 
* Motivation:
* 1. The motivation of this refactor is to split a code into separate modules.
* 2. It is useful when code is dealing with two different things.
*
* Mechanics:
* 1. Extract the second phase code into its own function.
* 2. Test.
* 3. Introduce an intermediate data structure as an additional argument to the extracted function.
* 4. Test.
* 5. Examine each parameter should not be used by the second phase. In this case, extract the results of each usage of the parameter into a field of the intermediate
* data structure and use move statements to callers on the line that populates it.
* 6. Apply extract function on the first-phase code, returning the intermediate data structure.
*
* Example:
*/

const assert = require('assert');
const PriceOrder = require('./splitPhaseRefactored.js')

describe('priceOrder', function(){
    it('Should return correct price order', function(){
        const product = {
            "basePrice": 4, 
            "discountThreshold": 0.2, 
            "discountRate":0.2
        }
        const quantity = 2;
        const shippingMethod = {
            "discountThreshold": 0.2,
            "discountedFee": 0.2,
            "feePerCase": 0.2, 
        };

        const result = PriceOrder(product, quantity, shippingMethod);
        assert.strictEqual(result, 6.96)
    })
})
