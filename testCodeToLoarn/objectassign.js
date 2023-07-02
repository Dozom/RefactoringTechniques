/**
 * In this file, i want to learn more about Object.assign and what is the output of the code.
 * After testing with this code, i learned about Object.assign used in map functions, 
 * in conclusion, we can use it to append elements to shallow objects without modifying the
 * main object
 * Thank's Martin Fowler ;D
 */

const animals = [
    {
        "name": "fox",
        "type": 1
    },
    {
        "name": "elephant",
        "type": 2
    },
]
const animalTypes = {
    "1": "Canidae",
    "2": "Elephantidae"
}
function enrichAnimalsWithStringType(animal) {
    const result = Object.assign({}, animal);
    result.typeString = getTypeOfAnimal(animal);
    return result;
}
function getTypeOfAnimal(animal) {
    return animalTypes[animal.type]
}

console.log(getTypeOfAnimal(animals[0]))
console.log(animals);
const animalsEnriched = animals.map(enrichAnimalsWithStringType)
console.log(animals);
console.log(animalsEnriched);