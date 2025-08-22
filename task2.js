function sumOfCubes(arr) {
    return arr.reduce((acc, currentNumber) => {
        const cube = Math.pow(currentNumber, 3)
        return acc + cube
    }, 0)
}

console.log(`sumOfCubes([1, 5, 9]) -> ${sumOfCubes([1, 5, 9])}`)
console.log(`sumOfCubes([3, 4, 5]) -> ${sumOfCubes([3, 4, 5])}`)
console.log(`sumOfCubes([2]) -> ${sumOfCubes([2])}`)
console.log(`sumOfCubes([]) -> ${sumOfCubes([])}`)