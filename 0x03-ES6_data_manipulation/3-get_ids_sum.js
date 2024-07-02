/**
 * Returns the sum of all student IDs.
 * @param {Array} students - Array of student objects.
 * @returns {number} Sum of student IDs.
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
