const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { d: 4 }

function mergeObjects(obj1, obj2) {
  const obj = Object.assign({}, obj1, obj2)
  return obj
}

console.log(mergeObjects(obj1, obj2))
