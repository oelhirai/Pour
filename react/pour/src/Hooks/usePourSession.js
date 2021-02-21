// This defaults to 4 pours. Research if we need to divy up pours in the future.
export function usePourSession(coffeeWeight) {
  const coffeeToWaterRatio = 50 / 3; // ratio of 1 : 16+(2/3)
  const waterWeight = Math.round(coffeeWeight * coffeeToWaterRatio);
  const numberOfSteps = 4;

  // TODO: Handle case where sum of pours don't add to total.
  function getPours(coffeeWeight, waterWeight) {
    const bloomPour = coffeeWeight * 2;
    const regularPour = Math.round(
      (waterWeight - bloomPour) / (numberOfSteps - 1)
    );

    return Array(numberOfSteps)
      .fill()
      .map((_, index) => {
        return index === 0 ? bloomPour : regularPour;
      });
  }

  return {
    totalWaterWeight: waterWeight,
    pours: getPours(coffeeWeight, waterWeight)
  };
}
