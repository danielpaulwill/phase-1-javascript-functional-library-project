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
      console.log('acc within ===: ' + acc)
      acc = (callback(array, array[i]))
      let num = parseInt(acc)
      console.log('num is: ' + num)
      console.log('acc after ===: ' + acc)
    } else if (acc !== 0) {
      acc = (callback(acc, array[i], array))
    }
  }
    console.log(acc)
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
  // console.log('n input is: ' + n)
  if (n === 0) {
    // console.log('array[0] is: ' + array[0])
    return array[0]
  } if (n !== 0)  {
    let newArray = array.slice(0, n)
    // console.log('newArray is: ' + newArray)
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




//I NEED HELP!!!
function myKeys (object) {
  const keys = object.map(function(keys){
    return keys.value
  })
  console.log(keys)
//   let array = []
//   console.log('Yo yo yo')
//   object.keys.forEach(element => console.log(element))
//   // for (const keys of object.keys) {
//   //   console.log('HEYO')
//   //   array.push(keys)
//   //   console.log('array after the push: ' + array)
//   // }
// console.log(array)
// return array
}

