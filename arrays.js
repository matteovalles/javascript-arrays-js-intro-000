var chocolateBars = [snickers, hundred grand, kitkat, skittles]

function addElementToBeginningOfArray(array, element) {
  var newarray = array.unshift(element)
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}