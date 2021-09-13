import { useEffect, useRef, useState } from "react";
import State from "./State";
import PointerComponent from "./PointerComponent";
import KeyboardComponent from "./Keyboard";

function App() {
  const canvasRef = useRef(null!);
  const pointerOneRef = useRef(null!);
  const pointerTwoRef = useRef(null!);
  const pointerThreeRef = useRef(null!);
  const markOneRef = useRef(null!);
  const markTwoRef = useRef(null!);
  const markThreeRef = useRef(null!);
  const [_state, setState] = useState<null | State>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const state = new State(canvas);
    state.PointerOne.setLogEl(pointerOneRef.current);
    state.PointerTwo.setLogEl(pointerTwoRef.current);
    state.PointerThree.setLogEl(pointerThreeRef.current);
    state.PointerOne.setMarkEl(markOneRef.current);
    state.PointerTwo.setMarkEl(markTwoRef.current);
    state.PointerThree.setMarkEl(markThreeRef.current);
    setState(state);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        <div ref={pointerOneRef}></div>
        <div ref={pointerTwoRef}></div>
        <div ref={pointerThreeRef}></div>
        <div ref={markOneRef} className="mark"></div>
        <div ref={markTwoRef} className="mark"></div>
        <div ref={markThreeRef} className="mark"></div>
      </div>
      <canvas ref={canvasRef}></canvas>
      {_state ? (
        <>
          <PointerComponent state={_state} />
          <KeyboardComponent state={_state} />
        </>
      ) : null}
    </>
  );
}

export default App;
