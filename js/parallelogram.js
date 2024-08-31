function parallelogramAreaCalculate() {
  /** get parallelogram base value */
  const parallelogramBaseInput = document.getElementById('parallelogramBase')
  const parallelogramBaseValue = parallelogramBaseInput.value
  const parallelogramBase = parseFloat(parallelogramBaseValue)
  console.log(parallelogramBase)

  /** get parallelogram height value */
  const parallelogramHeightInput = document.getElementById(
    'parallelogramHeight'
  )
  const parallelogramHeightValue = parallelogramHeightInput.value
  const parallelogramLength = parseFloat(parallelogramHeightValue)
  console.log(parallelogramLength)

  /** calculate parallelogram area */
  const parallelogramArea = parallelogramBase * parallelogramLength
  console.log(parallelogramArea)

  /** display parallelogram are */
  const parallelogramAreaSpan = document.getElementById('parallelogramArea')
  parallelogramAreaSpan.innerText = parallelogramArea
  console.log(parallelogramAreaSpan)
}
