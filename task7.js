function formatPhoneNumber(arr) {
    const firstPart = arr.slice(0, 3).join('')
    const middlePart = arr.slice(3, 6).join('')
    const lastPart = arr.slice(6, 10).join('')

    console.log(`(${firstPart}) ${middlePart}-${lastPart}`)
}

formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])