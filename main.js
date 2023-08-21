function solve(arr) {

  let testArr = arr
  let dominantArr = []

  for (let i = 0; i < testArr.length; i++) {
    
    let falseCounter = 0

    for (let j = i+1 ; j < testArr.length; j++) {
      
      if ( testArr[i] <= testArr[j] ) { falseCounter++ }
      
    }
    
    if ( falseCounter == 0 ) { dominantArr.push(testArr[i]) }

  }

  return dominantArr
}

console.log(solve([5,2,6,1,5]))


// parameters: arr     // an array of numbers
// return: dominantArr     // an array of numbers from arr which are greater than all elements to the right of them
// e.g. solve([5,2,6,1,5])
// results in [6,5]


// declare a variable testArr and assign it to arr
// declare a variable dominantArr and assign it to []
// for loop with i = 0, i < testArr.length, i++
  // declare a variable falseCounter and assign it to 0
  // another for loop with j = i + 1, j < testArr.length, j++
    // if testArr[i] < testArr[j] then add and reassign 1 to falseCounter
  // end inner loop
  // if falseCounter == 0 then push testArr[i] to dominantArr
// end outer loop
// return dominantArr