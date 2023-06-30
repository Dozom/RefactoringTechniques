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
function statement(invoice, plays) {
    let result = `Statement for ${invoice.customer}\n`;
    for (let perf of invoice.performances) {
        result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
    }
    result += `Amount owed is ${usd(totalAmount())}\n`;
    result += `You earned ${totalVolumeCredits()} credits`;
    return result;

    function totalAmount(){
        let result = 0;
        for (let perf of invoice.performances) {
            result += amountFor(perf);
        }        
        return result;
    }

    function totalVolumeCredits() {
        let result = 0;
        for (let perf of invoice.performances) {
            result += volumeCreditsFor(perf);
        }
        return result;
    }

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US", 
                                    {style: "currency", currency: "USD", 
                                    minimumFractionDigits: 2}).format(aNumber/100);
    }

    function volumeCreditsFor(aPerformance) {
        let result = 0;
        result += Math.max(aPerformance.audience - 30, 0);
        if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
        return result;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance) {
        let result = 0;
        switch (playFor(aPerformance).type) {
            case "tragedy":
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if(aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`unknown type: ${playFor(aPerformance).type}`);
        }
        return result;
    }

}

module.exports = statement