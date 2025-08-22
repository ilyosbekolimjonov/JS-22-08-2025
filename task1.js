function numberSplit(num) {
  const firstHalf = Math.floor(num / 2)
  
  const secondHalf = Math.ceil(num / 2)
  
  return [firstHalf, secondHalf]
}

console.log(`numberSplit(4) -> [${numberSplit(4)}]`)
console.log(`numberSplit(10) -> [${numberSplit(10)}]`)
console.log(`numberSplit(11) -> [${numberSplit(11)}]`)
console.log(`numberSplit(-9) -> [${numberSplit(-9)}]`)