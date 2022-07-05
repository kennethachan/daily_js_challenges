function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) return false
  for (let i = 2; i <= n / 2; i++) {
    if (Number.isInteger(n / i)) return false
  }
  console.log(n)
  return true
}
