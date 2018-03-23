export namespace ArrayHelpers {
  export function calculateTotal(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
  }
}
