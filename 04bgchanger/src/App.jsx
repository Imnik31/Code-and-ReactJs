import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("#5d8aa8")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#5d8aa8"}}
          >Airforce Blue</button>
          <button
          onClick={() => setColor("#ffbf00")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#ffbf00"}}
          >Amber</button>
          <button
          onClick={() => setColor("#9966cc")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#9966cc"}}
          >Amythst</button>
          <button
          onClick={() => setColor("#9f8170")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#9f8170"}}
          >Beaver</button>
          <button
          onClick={() => setColor("#21abcd")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#21abcd"}}
          >Ball Blue</button>
          <button
          onClick={() => setColor("#de5d83")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#de5d83"}}
          >Blush</button>
          <button
          onClick={() => setColor("#fb607f")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#fb607f"}}
          >Brik Pink</button>
          <button
          onClick={() => setColor("#cc5500")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#cc5500"}}
          >Burnt Orange</button>
          <button
          onClick={() => setColor("#1560bd")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#1560bd"}}
          >Denim Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App