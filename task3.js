function minMax(arr) {
    const min = Math.min(...arr)

    const max = Math.max(...arr)

    return [min, max]
}

console.log(`minMax([1, 2, 3, 4, 5]) -> [${minMax([1, 2, 3, 4, 5])}]`)
console.log(`minMax([2334454, 5]) -> [${minMax([2334454, 5])}]`)
console.log(`minMax([1]) -> [${minMax([1])}]`)
console.log(`minMax([-10, 0, 10]) -> [${minMax([-10, 0, 10])}]`)