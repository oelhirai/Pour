import React from "react";
import Pour from "./Views/Pour";

function App() {
  const session = {
    totalCoffeeWeight: 15,
    totalWaterWeight: 250,
    pours: [30, 75, 75, 70]
  };

  return (
    <div class="">
      <Pour session={session} />
    </div>
  );
}

export default App;
