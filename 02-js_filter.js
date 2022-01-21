// Class code examples

const numbers = [1, 60, 112, 123, 100, 99, 73, 35, 22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18]

const filterEvenNumbers = function (element) {
    if (element % 2 === 0) return true
    else return false
}

const filterOddNumbers = function (element) {
    if (element % 2 !== 0) return true
    else return false
}

const filterLessThanOneHundred = function (element){
    return element < 100
}

const filterMoreThanOneHundred = function (element){
    return element > 100
}

const evenNumbers = numbers.filter(filterEvenNumbers)

const oddNumbers = numbers.filter(filterOddNumbers)

const lessThanOneHundred = numbers.filter(filterLessThanOneHundred);

const moreThanOneHundred = numbers.filter(filterMoreThanOneHundred);

console.log(
    numbers,
    evenNumbers,
    oddNumbers,
    lessThanOneHundred,
    moreThanOneHundred
);


console.log( numbers === evenNumbers);
console.log( numbers === oddNumbers);
console.log( evenNumbers === oddNumbers);

const students = [
    {name: 'Rafa', color: 'Blue', age: 24},
    {name: 'Elise', color: 'Pink', age: 21},
    {name: 'Bodei', color: 'Yellow', age: 31},
    {name: 'Jorge', color: 'Red', age: 18}
    ]


const getOlderThan21 = function(student){
    return student.age >= 21
}

const drinkingStudents = students.filter(getOlderThan21)

const getPinkStudents = function(element){
    return element.color.toLowerCase() === "pink"
}
const pinkStudents = students.filter(getPinkStudents)

console.log(pinkStudents);