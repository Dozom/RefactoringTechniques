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
const statement = require('./splitPhasev2Refactored')

const invoices = [{
    "customer": "Daniel Nager Carpio",
    "performances": [{
        "audience": 31,
        "playID": "Dagoll Dagom, L'alegria que passa"
    }, {
        "audience": 21,
        "playID": "Elektra.25"
    }]
}, {
    "customer": "John Pastanaga",
    "performances": [{
        "audience": 21,
        "playID": "Elektra.25"
    }]
}]

const plays = {
    "Dagoll Dagom, L'alegria que passa": {
        "name": "Dagoll Dagom, L'alegria que passa",
        "type": "comedy",
    },
    "Elektra.25": {
        "name": "Elektra.25",
        "type": "tragedy",
    }
}

describe('statement', function () {
    it('Should return correct values for a Client with two plays', function () {
        const testStatement = statement(invoices[0], plays);
        assert.equal(testStatement, `Statement for Daniel Nager Carpio
Dagoll Dagom, L'alegria que passa: $548.00 (31 seats)
Elektra.25: $400.00 (21 seats)
Amount owed is $948.00
You earned 7 credits`
        )
    })

    it('Should return correct values for a Client with only one play', function () {
        const testStatement = statement(invoices[1], plays);
        assert.equal(testStatement, `Statement for John Pastanaga
Elektra.25: $400.00 (21 seats)
Amount owed is $400.00
You earned 0 credits`
        )
    })

})