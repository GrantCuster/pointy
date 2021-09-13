import { useEffect } from "react";
import State from "./State";

type KeyboardProps = {
  state: State;
};

function Keyboard({ state }: KeyboardProps) {
  useEffect(() => {
    const downHandler = (e: KeyboardEvent) => {
      let press = e.key.toLowerCase();
      if (!e.repeat) state.pressed.push(press);
    };

    const upHandler = (e: KeyboardEvent) => {
      let press = e.key.toLowerCase();
      const index = state.pressed.indexOf(press);
      if (index !== -1) {
        state.pressed.splice(index, 1);
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return null;
}

export default Keyboard;
