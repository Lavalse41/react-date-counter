function StepCount() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("22 July 2541");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <button onClick={() => setStep((s) => s - 1)}>-</button>
      <span>Step : {step}</span>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
      <br></br>

      <button onClick={() => setCount((c) => c - step)}>-</button>
      <span>Count : {count}</span>
      <button onClick={() => setCount((c) => c + step)}>+</button>
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

export default StepCount;
