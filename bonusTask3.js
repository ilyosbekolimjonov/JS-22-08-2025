function findMissingNumber(nums) {
    const n = nums.length
    const expectedSum = n * (n + 1) / 2

    const actualSum = nums.reduce((sum, current) => sum + current, 0)

    return expectedSum - actualSum
}

console.log(findMissingNumber([3, 0, 1])) 
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) 