//  list of supported operation types
export const OperationTypes = ["rectangular", "circular", "threaded"] as const;
//  type-safe suported operation type
export type OperationType = typeof OperationTypes[number];
//  base operation
export type Operation = {
  op: OperationType;
  cx: number;
  cy: number;
};
//  operations
export interface Rectangular extends Operation {
  op: "rectangular";
  w: number;
  h: number;
}
export interface Circular extends Operation {
  op: "circular";
  d: number;
}
export interface Threaded extends Operation {
  op: "threaded";
  d: number;
}
//  factory functions
export function makeRectangular(w: number, h: number, cx = 0, cy = 0): Rectangular {
  return {
    op: "rectangular",
    cx: cx,
    cy: cy,
    w: w,
    h: h,
  };
}
export function makeCircular(d: number, cx = 0, cy = 0): Circular {
  return {
    op: "circular",
    cx: cx,
    cy: cy,
    d: d,
  };
}
export function makeThreaded(d: number, cx = 0, cy = 0): Threaded {
  return {
    op: "threaded",
    cx: cx,
    cy: cy,
    d: d,
  };
}
