import { SubPointer } from "./PointerComponent";
import Pointer from "./Pointer";

// no between because it gets complicated
class PointerThree extends Pointer {
  constructor(label: string) {
    super(label);
  }

  start(subPointers: Array<SubPointer>) {
    this.active = true;
    this.subPointers = subPointers;
    const [p1, p2, p3] = subPointers;

    this.current
      .copy(p1.current)
      .add(p2.current)
      .add(p3.current)
      .divideScalar(3);
    this.initial.copy(this.current);

    this.diff.set(0, 0);
    super.extras();
  }

  move() {
    if (this.subPointers) {
      const [p1, p2, p3] = this.subPointers;
      this.current
        .copy(p1.current)
        .add(p2.current)
        .add(p3.current)
        .divideScalar(3);

      this.diff.copy(this.current).sub(this.initial);
      super.extras();
    }
  }

  end() {
    super.end();
    super.extras();
  }
}

export default PointerThree;
