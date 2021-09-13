import * as THREE from "three";
import { SubPointer } from "./PointerComponent";

class Pointer {
  active: boolean;
  subPointers: null | Array<SubPointer>;
  initial: THREE.Vector2;
  current: THREE.Vector2;
  diff: THREE.Vector2;
  label: string;
  logEl: null | HTMLElement;
  markEl: null | HTMLElement;

  constructor(label: string) {
    this.label = label;
    this.active = false;
    this.subPointers = null;
    this.initial = new THREE.Vector2();
    this.current = new THREE.Vector2();
    this.diff = new THREE.Vector2();
    this.logEl = null;
    this.markEl = null;
  }

  start(subPointers: Array<SubPointer>) {
    this.active = true;
  }

  end() {
    this.active = false;
    this.current.set(0, 0);
    this.diff.set(0, 0);
  }

  setLogEl(el: HTMLElement) {
    this.logEl = el;
    this.log();
  }

  log() {
    if (this.logEl !== null) {
      this.logEl.innerText =
        this.label +
        " " +
        JSON.stringify(this.active) +
        " diff " +
        Math.round(this.diff.x) +
        "," +
        Math.round(this.diff.y);
    }
  }

  setMarkEl(el: HTMLElement) {
    this.markEl = el;
    this.updateMark();
  }

  extras() {
    this.log();
    this.updateMark();
  }

  updateMark() {
    if (this.markEl !== null) {
      if (this.active) {
        this.markEl.style.display = "block";
      } else {
        this.markEl.style.display = "none";
      }
      this.markEl.style.left = this.current.x + "px";
      this.markEl.style.top = this.current.y + "px";
    }
  }
}

export default Pointer;
