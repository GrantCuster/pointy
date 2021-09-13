import { SubPointer } from "./PointerComponent";
import Pointer from "./Pointer";

class PointerOne extends Pointer {
  constructor(label: string) {
    super(label);
  }

  start(subPointers: Array<SubPointer>) {
    super.start(subPointers);
    this.subPointers = subPointers;
    const [p1] = this.subPointers;
    this.initial.copy(p1.current);
    this.current.copy(p1.current);
    this.diff.set(0, 0);
    super.extras();
  }

  move() {
    if (this.subPointers) {
      const [p1] = this.subPointers;
      this.current.copy(p1.current);
      this.diff.copy(this.current).sub(this.initial);

      super.extras();
    }
  }

  end() {
    super.end();
    super.extras();
  }
}

export default PointerOne;
