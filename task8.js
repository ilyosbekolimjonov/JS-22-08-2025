function spelling(word) {
    const result = []
    let currentString = ''

    for (let i = 0; i < word.length; i++) {
        currentString += word[i]
        result.push(currentString)
    }
    console.log(result)
}

spelling("bee")
spelling("happy")
spelling("eagerly")