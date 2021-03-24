const RIGHT = Symbol('RIGHT');
const LEFT = Symbol('LEFT');
const UP = Symbol('UP');
const DOWN = Symbol('DOWN');
const NONE = Symbol("NONE");



export default class State {
  static get RIGHT() { return RIGHT; }
  static get LEFT() { return LEFT; }
  static get DONE() { return DONE; }
  static get NONE() {return NONE;}
  static get UP() {return UP};
  static get DOWN() {return DOWN};
}