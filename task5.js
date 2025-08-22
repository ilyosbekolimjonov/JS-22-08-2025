function multiplyWithoutOperator(arr) {
    let [num1, num2] = arr

    const isNegativeResult = (num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)
    num1 = Math.abs(num1)
    num2 = Math.abs(num2)

    let result = 0
    for (let i = 0; i < num2; i++) result += num1

    return isNegativeResult ? -result : result
}

console.log(`multiplyWithoutOperator([3, 4]) -> ${multiplyWithoutOperator([3, 4])}`)
console.log(`multiplyWithoutOperator([2, 4]) -> ${multiplyWithoutOperator([2, 4])}`)
console.log(`multiplyWithoutOperator([-5, 3]) -> ${multiplyWithoutOperator([-5, 3])}`)
console.log(`multiplyWithoutOperator([6, -4]) -> ${multiplyWithoutOperator([6, -4])}`)
console.log(`multiplyWithoutOperator([-2, -3]) -> ${multiplyWithoutOperator([-2, -3])}`)