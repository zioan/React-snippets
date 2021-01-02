import React, { useState, useEffect } from "react";

function TimeArea() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => setTheTime(new Date().toLocaleString()), 1000);
  }, []);

  return <p>The current time is {theTime}.</p>;
}

export default TimeArea;
