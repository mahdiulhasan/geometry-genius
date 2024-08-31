function rectangleAreaCalculate() {
  /** get rectangle with value */
  const rectangleWidthInput = document.getElementById('rectangleWidth')
  const rectangleWidthValue = rectangleWidthInput.value
  const width = parseFloat(rectangleWidthValue)
  console.log(width)

  /** get rectangle height value */
  const rectangleLengthInput = document.getElementById('rectangleLength')
  const rectangleLengthValue = rectangleLengthInput.value
  const length = parseFloat(rectangleLengthValue)
  console.log(length)

  /** calculate rectangle area */
  const rectangleArea = width * length
  console.log(rectangleArea)

  /** display rectangle are */
  const rectangleAreaSpan = document.getElementById('rectangleArea')
  rectangleAreaSpan.innerText = rectangleArea
  console.log(rectangleAreaSpan)
}
