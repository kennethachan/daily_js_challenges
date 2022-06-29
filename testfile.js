function formatWithPadding(int, char, length) {
  let string = ""
  for (let i = 0; i < length; i++) {
    string = string + char
    console.log(string)
  }
  const paddedString = string + int
  console.log(paddedString)
  return paddedString.slice(-length)
}
console.log(formatWithPadding(123, "0", 5))
