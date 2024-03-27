import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="centered">
      <h1>Bharat Clock</h1>
      <p className="desc">
        This is the clock that shows the time in Bharat at all times.
      </p>
      <p className="time_date">
        This is the current date{" "}
        <span style={{ color: "red" }}>{`${date.toLocaleDateString()}`}</span>{" "}
        and time{" "}
        <span style={{ color: "red" }}>{`${date.toLocaleTimeString()}`}</span>
      </p>
    </div>
  );
}

export default App;
