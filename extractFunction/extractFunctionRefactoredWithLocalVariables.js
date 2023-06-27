
/* Extract Function
 * 
 * Motivations:
 * 1. Functions should be no longer than fit on screen.
 * 2. Any code used more than once should be put in its own function
 * 3. Separate between intention and implementation.
 *
 * Mechanics:
 * 1. Create a new function and name it after the intent of the function (name it by what it does, not by how it does it)
 * 2. Copy the extracted code from source function into the new target function.
 * 3. Scan the extracted code for references to any variables that are local in scope to the source function and will not be in scope for the extracted function. Pass them as parameters.
 * 4. Compile after all variables are dealt with.
 * 5. Replace the extracted code in the source function with a call to the target function.
 * 6. Test.
 * 7. Look for other code that's the same or similar to the code just extracted, and consider using Replace inline Code with Function Call to call the new function.
 *
 * Example with No variables Out of Scope
 * */

function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  recordDueDate(invoice)

  printDetails(invoice, outstanding)

}

function printBanner() {
  console.log("*******************");
  console.log("** Customer Owes **");
  console.log("*******************");
}

function printDetails() {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${invoice.outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}










