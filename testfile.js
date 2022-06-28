function reverseUpcaseString(string) {
  return string.split("").reverse().join("").toUpperCase()
}
console.log(reverseUpcaseString("hello"))
