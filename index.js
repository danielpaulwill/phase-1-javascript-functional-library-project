function myEach(collection, callback) {
  let array = Object.values(collection) 
  for (const element of array) {
    callback(element)
  }
  return collection
}

function myMap(collection, callback) {
  let array = Object.values(collection)
  let myArray = []
  for (const element of array) {
    let newValue = callback(element)
    myArray.push(newValue)
  }
  return myArray
}

function myReduce(collection, callback, acc = 0) {
  let array = Object.values(collection)
  for (let i = 0; i < array.length; i++) {
    if (acc === 0) {
      acc = array[0]
      const newArray = array.slice(1)
    } else if (acc !== 0) {
      acc = (callback(acc, array[i], array))
    }
  }
    return acc
  }

function myFind(collection, predicate) {
  let array = Object.values(collection)
  for (const element of array) {
    let value = predicate(element)
    if (value === true) {
      return element
    }
  }
}

function myFilter(collection, predicate) {
  let array = Object.values(collection)
  let newArray = []
  for (const element of array) {
    let value = predicate(element)
    if (value === true) {
      newArray.push(element)
    }
  }
  return newArray
}

function mySize(collection) {
  let array = Object.keys(collection)
  return array.length
}

function myFirst(array, n = 0) {
  if (n === 0) {
    return array[0]
  } if (n !== 0)  {
    let newArray = array.slice(0, n)
    return newArray
  }
}

function myLast(array, n = 0) {
  if (n === 0) {
    let newArray = array.slice(-1)[0]
    return newArray
  } if (n !== 0)  {
    let lastIndex = (array.length + 1)
    let newArray = array.slice(-n, lastIndex)
    return newArray
  }
}

function myKeys (object) {
  let array = []
  for (const property in object) {
    array.push(property)
  }
  return array
}



function myValues (obj) {
  let array = []
  for (const element in obj){
    array.push(obj[element])
  }
  return array
}