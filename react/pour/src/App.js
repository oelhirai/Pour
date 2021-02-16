import React from "react";
import Pour from "./Views/Pour";
import Configure from "./Views/Configure";

function App() {
  const session = {
    totalCoffeeWeight: 15,
    totalWaterWeight: 250,
    pours: [30, 75, 75, 70]
  };

  return (
    <div className="h-full">
      <h5 className="p-3 text-3xl font-bold mb-4 mt-0">Pour</h5>
      {/* <Pour session={session} /> */}
      <Configure />
    </div>
  );
}

export default App;
