function mumble(string) {
  let characters = string.split(""),
    newString = []

  for (let i = 0; i < characters.length; i++) {
    newString.push(characters[i] + Array(i + 1).join(characters[i]))
  }

  return newString.join("-")
}
console.log(mumble("abc"))
