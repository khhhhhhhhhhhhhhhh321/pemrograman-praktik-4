import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p className="count-display">Nilai saat ini: {count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Tambah</button>
        <button onClick={() => setCount(count - 1)}>Kurang</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
