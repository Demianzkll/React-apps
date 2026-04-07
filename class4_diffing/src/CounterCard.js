import React, { useState } from "react";
import useRenderCounter from "./RenderCounter";

function CounterCard({ title }) {
  const [value, setValue] = useState(0);
  const renderCount = useRenderCounter();

  return (
    <div style={{ padding: 10, border: "2px solid #aaa", width: 250 }}>
      <h3>{title}</h3>
      <p>Value: {value}</p>
      <p>Rendered: {renderCount} times</p>

      <button onClick={() => setValue(v => v + 1)}>
        Збільшити value
      </button>
    </div>
  );
}

export default CounterCard;
