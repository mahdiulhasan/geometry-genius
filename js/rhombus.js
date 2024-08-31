function rhombusAreaCalculate() {
  /** get rhombus base value */
  const diagonal1 = getInputValueById('diagonal1')

  /** get rhombus height value */
  const diagonal2 = getInputValueById('diagonal2')

  /** calculate rhombus area */
  const rhombusArea = 0.5 * diagonal1 * diagonal2
  console.log(rhombusArea)

  /** display rhombus are */
  setInnerTextById('rhombusArea', rhombusArea)
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

function rhombusArea(diagonal1, diagonal2) {
  return 0.5 * diagonal1 * diagonal2
}

// Example usage:
const d1 = 10
const d2 = 8
const area = rhombusArea(d1, d2)
console.log('The area of the rhombus is: ' + area)
