import { SubPointer } from "./PointerComponent";
import * as THREE from "three";
import Pointer from "./Pointer";

class PointerTwo extends Pointer {
  initialBetween: THREE.Vector2;
  between: THREE.Vector2;

  constructor(label: string) {
    super(label);
    this.between = new THREE.Vector2();
    this.initialBetween = new THREE.Vector2();
  }

  start(subPointers: Array<SubPointer>) {
    super.start(subPointers);
    this.subPointers = subPointers;
    const [p1, p2] = subPointers;

    this.current.copy(p1.current).add(p2.current).divideScalar(2);
    this.initial.copy(this.current);

    this.between.copy(p1.current).sub(p2.current);
    this.initialBetween.copy(this.between);

    this.diff.set(0, 0);
    super.extras();
  }

  move() {
    if (this.subPointers) {
      const [p1, p2] = this.subPointers;
      this.current.copy(p1.current).add(p2.current).divideScalar(2);

      this.between.copy(p1.current).sub(p2.current);

      this.diff.copy(this.current).sub(this.initial);
      super.extras();
    }
  }

  end() {
    super.end();
    super.extras();
  }
}

export default PointerTwo;
