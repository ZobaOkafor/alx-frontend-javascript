/**
 * Returns an array of student IDs from the provided array of student objects.
 * If the input is not an array, it returns an empty array.
 * @param {Array} students - Array of student objects.
 * @returns {Array} Array of student IDs.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map(student => student.id);
