import React, { useState, useEffect } from "react";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (props.isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    // A function returned here will run for cleanup
    // If we don't clear the interval, all spawned
    // functions will continue to run
    return () => clearInterval(interval);
  }, [seconds]);

  const timeFormatter = val => `0${Math.floor(val)}`.slice(-2);
  var minutes = seconds / 60;
  var time = [minutes, seconds % 60].map(timeFormatter).join(":");

  return <div>{time}s</div>;
}

export default Timer;
