/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position to set the Int8 value.
 * @param {number} value - The Int8 value to set.
 * @returns {DataView} A DataView of the created ArrayBuffer.
 * @throws {Error} If the position is outside the range of the ArrayBuffer.
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  view.setInt8(position, value);
  return view;
}
