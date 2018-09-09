var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  newarray = array.unshift(element)
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}
