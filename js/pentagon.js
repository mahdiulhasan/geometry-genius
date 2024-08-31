function pentagonAreaCalculate() {
  /** get rhombus base value */
  const perimeter = getInputValueById('perimeter')

  /** get rhombus height value */
  const apothem = getInputValueById('apothem')

  /** calculate rhombus area */
  const pentagonArea = 0.5 * perimeter * apothem
  console.log(pentagonArea)

  /** display rhombus are */
  setInnerTextById('pentagonArea', pentagonArea)
  //   console.log(rhombusAreaSpan)
}

/** get input value function */
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId)
  const inputFieldValueText = inputField.value
  const inputValueNumber = parseFloat(inputFieldValueText)
  return inputValueNumber
}

/** set value function */
function setInnerTextById(elementId, areaValue) {
  const element = document.getElementById(elementId)
  element.innerText = areaValue
}

// Pentagon Area
function pentagon(side) {
  const areaa =
    (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(side, 2)
  return areaa
}

// Example usage:
const sideLength = 6
const areaa = pentagon(sideLength)
console.log('The area of the pentagon is: ' + areaa)
