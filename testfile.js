let ip = "192.156.99.15"

function getNumForIP(ip) {
  let chunks = ip.split(".").reverse()
  let sum = 0
  chunks.forEach(function (chunk, i) {
    sum += parseInt(chunk) * 256 ** i
  })
  return sum
}
