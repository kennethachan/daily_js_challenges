function fromPairs(arr) {
  let total = []
  arr.forEach(function (newArray) {
    total[newArray[0]] = newArray[1]
  })
  return total
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
)
