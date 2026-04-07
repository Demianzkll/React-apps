import React, { useState } from "react";
import Module from "./Module";


export default function ControlPanel() {
  const [ship, setShip] = useState({
    Navigation: 50,
    Engine: 60,
    Power: 40,
    Shield: 30,
  });

  const updateValue = (moduleName, delta) => {
    setShip(prev => ({
      ...prev,
      [moduleName]: Math.min(100, Math.max(0, prev[moduleName] + delta)),
    }));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Control Panel</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Module name="Navigation" value={ship.Navigation} update={updateValue} />
        <Module name="Engine" value={ship.Engine} update={updateValue} />
        <Module name="Power" value={ship.Power} update={updateValue} />
        <Module name="Shield" value={ship.Shield} update={updateValue} />
      </div>
    </div>
  );
}
