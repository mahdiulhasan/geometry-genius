function calculateEllipseArea() {
  const majorRadiusInput = getInputValueById('majorRadius')
  const minorRadiusInput = getInputValueById('minorRadius')
  const ellipseCalculate = Math.PI * majorRadiusInput * minorRadiusInput

  setInnerTextById('ellipseArea', ellipseCalculate.toFixed(2))
}
