export const getTireProperty = (tireWidth: number, tireProfile: number, tireRims: number) => {
  const toNumber = (value: number) => Number(value)

  const tireWidthNum = toNumber(tireWidth)
  const tireProfileNum = toNumber(tireProfile)
  const tireRimsNum = toNumber(tireRims)

  if (isNaN(tireWidthNum) || isNaN(tireProfileNum) || isNaN(tireRimsNum) || tireProfileNum === 0) {
    return {
      diameter: 'n/d',
      width: 'n/d',
      rim: 'n/d',
      sidewall: 'n/d',
      circum: 'n/d',
      revskm: 'n/d',
    }
  }

  const factor = 1.04
  const inchToMm = 25.4

  const diameter = ((tireWidthNum * tireProfileNum) / 100) * 2 * factor + inchToMm * tireRimsNum
  const width = tireWidthNum
  const rim = tireRimsNum * 25.4
  const sidewall = ((tireWidthNum * tireProfileNum) / 100) * factor
  const circum = (2 * Math.PI * diameter) / 2
  const revskm = 1000000 / circum

  return {
    diameter: Math.round(diameter),
    width: Math.round(width),
    rim: Math.round(rim),
    sidewall: Math.round(sidewall),
    circum: Math.round(circum),
    revskm: Math.round(revskm),
  }
}

export const isReplacementAllowed = (tireDiameter: number, replacementDiameter: number) => {
  let respnse = null
  if (typeof tireDiameter === 'number' && typeof replacementDiameter === 'number') {
    const lowerBound = 0.98
    const higherBound = 1.015
    const value = 1 - replacementDiameter / tireDiameter
    const rate = value === 0 ? 0.01 : (-100 * value).toFixed(2)
    respnse = { allow: replacementDiameter >= tireDiameter * lowerBound && replacementDiameter <= tireDiameter * higherBound ? 'Tak' : 'Nie', percent: rate }
  }
  return respnse
}
