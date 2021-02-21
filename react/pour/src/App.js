import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Pour from "./Views/Pour";
import Configure from "./Views/Configure";

function App() {
  return (
    <div className="h-full">
      <Router>
        <h5 className="p-3 text-3xl font-bold mb-4 mt-0">Pour</h5>
        <Switch>
          <Route exact path="/" component={Configure} />
          <Route path="/pour/:coffeeWeight" component={Pour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
