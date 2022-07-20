import React, {  useRef, useState, useEffect } from "react"
import './App.css';
import Overlay from "./components/Overlay";
import Loading from "./components/Loading";

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
          <Overlay ref={overlay} caption={caption} scroll={scroll} />
          {/* <BigLogo scroll={scroll} caption={caption} />
          
          <ParticlesBackGround />  */}
        </div>
      ) : (<Loading />)}
    </>
  );
}

export default App;
