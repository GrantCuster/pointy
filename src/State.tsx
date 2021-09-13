import { SubPointer } from "./PointerComponent";
import PointerOne from "./PointerOne";
import PointerThree from "./PointerThree";
import PointerTwo from "./PointerTwo";
import PointerMiddle from "./PointerMiddle";

class State {
  canvas: HTMLCanvasElement;
  pressed: Array<string>;
  pointers: Array<SubPointer>;
  extraPointers: Array<SubPointer>;
  PointerOne: PointerOne;
  PointerTwo: PointerTwo;
  PointerThree: PointerThree;
  PointerMiddle: PointerMiddle;
  lastPointerButtonPressed: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.pressed = [];
    this.pointers = [];
    this.extraPointers = [];
    this.PointerOne = new PointerOne("One");
    this.PointerTwo = new PointerTwo("Two");
    this.PointerThree = new PointerThree("Three");
    this.PointerMiddle = new PointerMiddle();
    this.lastPointerButtonPressed = 0;

    // init
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

export default State;
