/**
* Motivation:
* 1. The motivation of the change function declaration is to change the name of function to a name more clearer than it was before rename.
* 
* Mechanics:
*
* Simple mechanics:
* 1. If you're removing a parameter, ensure it isn't referenced in the body of the function.
* 2. Find all references to the old method defclaration, update them to the new one.
* 3. Test.
*
* Migration Mechanics:
* 1. If necessary, refactor the body of function to make it easy to do the folliowing extraction step.
* 2. Use extract function on the body of function to create a new function.
* 3. If the extract function need additional parameters, use simple mechanics to add them.
* 4. Apply inline function
* 5. If you used a temporary name, use Change Function Declaration again and restore it to the original name.
* 6. Test.
**/
function circumference (radius){
  return (2 * Math.PI * radius).toFixed(2);
}
module.exports = circumference 
