import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      {/* Color Buttons */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/50 p-4 rounded-xl flex gap-3">
        <button
          onClick={() => setColor("red")}
          className="w-10 h-10 rounded-full border"
          style={{ backgroundColor: "red" }}
        ></button>

        <button
          onClick={() => setColor("green")}
          className="w-10 h-10 rounded-full border"
          style={{ backgroundColor: "green" }}
        ></button>

        <button
          onClick={() => setColor("blue")}
          className="w-10 h-10 rounded-full border"
          style={{ backgroundColor: "blue" }}
        ></button>

        <button
          onClick={() => setColor("yellow")}
          className="w-10 h-10 rounded-full border"
          style={{ backgroundColor: "yellow" }}
        ></button>

        <button
          onClick={() => setColor("pink")}
          className="w-10 h-10 rounded-full border"
          style={{ backgroundColor: "pink" }}
        ></button>

        <button
          onClick={() => setColor("purple")}
          className="w-10 h-10 rounded-full border"
          style={{ backgroundColor: "purple" }}
        ></button>

        <button
          onClick={() => setColor("black")}
          className="w-10 h-10 rounded-full border"
          style={{ backgroundColor: "black" }}
        ></button>
      </div>
    </div>
  );
}

export default App;
