function charCount(string) {
  let letterCount = 1

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      letterCount++
    } else {
      console.log(string[i], letterCount)
      letterCount = 1
    }
  }
}
charCount("hello")
charCount("Today is fantastic!")
