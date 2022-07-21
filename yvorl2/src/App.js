import React, {  useRef, useState, useEffect } from "react"
import './App.css';
import Overlay from "./components/Overlay";
import Loading from "./components/Loading";
import CanvasComponent from "./components/Canvas";
import ParticlesBackGround from "./components/ParticlesBackGround";

function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading === false ? (
        <div className="App">
          <CanvasComponent caption={caption} />
          <Overlay ref={overlay} caption={caption} scroll={scroll} />
          <ParticlesBackGround />
        </div>
      ) : (<Loading />)}
    </>
  );
}

export default App;
