function triangleAreaCalculate() {
  /** get triangle base value */
  const triangleBaseInput = document.getElementById('triangleBase')
  const triangleBaseValue = triangleBaseInput.value
  const base = parseFloat(triangleBaseValue)
  console.log(base)

  /** get triangle height value */
  const triangleHeightInput = document.getElementById('triangleHeight')
  const triangleHeightValue = triangleHeightInput.value
  const height = parseFloat(triangleHeightValue)
  console.log(height)

  /** calculate triangle area */
  const triangleArea = 0.5 * base * height
  console.log(triangleArea)

  /** display triangle are */
  const triangleAreaSpan = document.getElementById('triangleArea')
  triangleAreaSpan.innerText = triangleArea
  console.log(triangleAreaSpan)
}
