function addList() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i]
  }
  return sum
}
console.log(addList(5, -12))
