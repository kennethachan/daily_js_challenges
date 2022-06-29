function hammingDistance(str1 = "", str2 = "") {
  if (str1.length !== str2.length) {
    return 0
  }
  let distance = 0
  for (i = 0; i < str1.length; i += 1) {
    if (str1[i] !== str2[i]) {
      distance += 1
    }
  }
  return distance
}
console.log(hammingDistance(str1, str2))

const str1 = "!!!!"
const str2 = "****"
