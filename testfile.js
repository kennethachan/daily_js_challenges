function countTheBits(n) {
  return n
    .toString(2)
    .split("")
    .filter((bit) => bit === "1").length
}
