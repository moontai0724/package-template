/**
 * Subtracts two numbers.
 *
 * @param a The number to subtract from
 * @param b The number to subtract
 * @returns The difference of the two numbers.
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}
