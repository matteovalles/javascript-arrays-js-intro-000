var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [element, ...array]
  return array
}

function addElementToEndOfArray(array, element) {
  var newarray = array.push(element)
  return newarray
}

function destructivelyAddElementToEndOfArray(array, element) {
  var array = [...array, element]
  return array
}
