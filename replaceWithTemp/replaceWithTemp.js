/**
* Motivation:
* The motivation to using the "Replace Temp with Query" rerfactor is to turn a variable into function, just
* to avoid duplicated code and make it easier when you want to use the value of a variable.
* It works better inside a Class than in global scope or in nested functions.
* 
* Mechanics:
* 1. Check that the variable is determined entirely before it's used, and the code that calculates it does not yield a different value whenever it is used
* 2. If the value isn't read only, and can be made read-only, do so.
* 3. Test.
* 4. Extract the assignment of the variable into a function. (Ensure the extracted function is free of side effects. If not, use Separate Query from Modifier).
* 5. Test.
* 6. Use inline Variable to remove the temp.
*/
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    var basePrice = this._quantity * this._item.price;
    var discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor; 
  }
}

console.log(new Order(5,{"price":40}).price)
