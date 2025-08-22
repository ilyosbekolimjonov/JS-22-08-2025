function findFirstOddNum(arr) {
    for (const number of arr) {
        if (number % 2 !== 0)
            return number
    }
    return null
}

console.log(findFirstOddNum([4, 12, 42, 9, 12, 3])) 
console.log(findFirstOddNum([123, 42, 93, 21, 11])) 
console.log(findFirstOddNum([2, 4, 6, 8, 10]))