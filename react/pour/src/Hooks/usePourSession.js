import { useState, useEffect } from "react";

// This defaults to 4 pours. Research if we need to divy up pours in the future.
export function usePourSession(coffeeWeight) {
  const [session, setSession] = useState({
    totalCoffeeWeight: 15,
    totalWaterWeight: 250,
    pours: [30, 75, 75, 70]
  });
  const numberOfSteps = 4;

  // TODO: Handle case where sum of pours don't add to total.
  function getPours(coffeeWeight, waterWeight) {
    const bloomPour = coffeeWeight * 2;
    const regularPour = Math.round(
      (waterWeight - bloomPour) / (numberOfSteps - 1)
    );

    return Array(numberOfSteps).map((_, index) => {
      return index === 0 ? bloomPour : regularPour;
    });
  }

  useEffect(() => {
    const coffeeToWaterRatio = 50 / 3; // ratio of 1 : 16+(2/3)
    const waterWeight = Math.round(coffeeWeight * coffeeToWaterRatio);
    setSession({
      totalCoffeeWeight: coffeeWeight,
      totalWaterWeight: waterWeight,
      pours: getPours(coffeeWeight, waterWeight)
    });
  }, [coffeeWeight]);

  return session;
}
