function returnVowel(arr) {
    const result = []
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < arr.length; i++) {
        let currentVowels = ''
        const str = arr[i]
        for (let j = 0; j < str.length; j++) {
            if (vowels.includes(str[j])) {
                currentVowels += str[j]
            }
        }
        result.push(currentVowels)
    }

    console.log(result)
}

returnVowel(["Assalomu alaykum", "salom", "Najot ta'lim"])
returnVowel(["AE"])