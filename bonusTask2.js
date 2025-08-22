function multiply(arr) {
    return function(multiplier) {
        const result = []
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i] * multiplier)
        }
        return result
    }
}

console.log(multiply([1, 2, 3])(2))

console.log(multiply([4, 6, 5])(10))

console.log(multiply([1, 2, 3])(0))