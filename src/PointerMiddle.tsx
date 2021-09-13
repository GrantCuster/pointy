import * as THREE from "three";

class PointerMiddle {
  active: boolean;
  initial: THREE.Vector2;
  current: THREE.Vector2;
  diff: THREE.Vector2;

  constructor() {
    this.active = false;
    this.initial = new THREE.Vector2();
    this.current = new THREE.Vector2();
    this.diff = new THREE.Vector2();
  }

  start(e: PointerEvent) {
    this.active = true;
    this.current.set(e.clientX, e.clientY);
    this.initial.copy(this.current);
    this.diff.set(0, 0);
  }

  move(e: PointerEvent) {
    this.current.set(e.clientX, e.clientY);
    this.diff.copy(this.current).sub(this.initial);
  }

  end() {
    this.active = false;
    this.current.set(0, 0);
    this.diff.set(0, 0);
  }
}

export default PointerMiddle;
