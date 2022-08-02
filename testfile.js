function intersection(arr1, arr2) {
  const unique = new Set(arr1)
  console.log([...unique])
  return [...unique].filter((item) => arr2.indexOf(item) !== -1)
}

intersection([4, 9, 5], [9, 4, 9, 8, 4])
