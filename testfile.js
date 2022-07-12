function toCamelCase(string) {
  return string.replace(/[_-]\w/g, function (match) {
    return match.charAt(1).toUpperCase()
  })
}
