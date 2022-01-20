// Class code examples

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

console.log(numbers === numbers.sort()) // Array stays the same "box"

numbers.sort();

console.log(numbers);

console.log(typeof numbers[0]);

// Passing the sorting criteria using a function

// Rules are that TWO elements will be given to your funciont and your function must return -1, 0, or 1 according to wether el1 is smaller, equal or greater than el2.

function sortMyNumbers(el1, el2) {
    if (el1 < el2) return 1
    if (el1 === el2) return 0
    if (el1 > el2) return -1
};

const sortedNumbers = numbers.sort(sortMyNumbers)



function quickSort(el1, el2) {
    return el1 - el2
}

console.log("sortedNumbers: ", sortedNumbers)


const students = [
    { firstName: 'John', lastName: 'Carr', age: 34 },
    { firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21 },
    { firstName: 'Sarah', lastName: 'O\'Connor', age: 45 },
]

function sortStudentsByAge(student1, student2) {
    if (student1.age > student2.age) return 1
    if (student1.age === student2.age) return 0
    if (student1.age < student2.age) return -1
}

function sortStudentsByAgeQuick(student1, student2) {
    return parseInt(student1.age) - parseInt(student2.age)
}

console.log(students.sort(sortStudentsByAge))

function sortStudentsByLastName(student1, student2) {

}

