import "../src/App.css";
import { useState } from "react";

function SlideCount() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("22 July 2541");
  date.setDate(date.getDate() + count);

  function rangeHandler(e) {
    const range = Number(e.target.value);
    setStep(range + 1);
  }

  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => rangeHandler(e)}
      ></input>
      <span>{step}</span>

      <br></br>
      <button onClick={() => setCount(count - step)}>-</button>
      <input type="number" value={count}></input>
      <button onClick={() => setCount(count + step)}>+</button>

      <p>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is `
          : count < 0
          ? `${Math.abs(count)} days ago is `
          : ""}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default SlideCount;
