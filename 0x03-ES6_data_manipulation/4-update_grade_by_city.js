/**
 * Returns an array of students for a specific city with their new grade.
 * @param {Array} students - Array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - Array of objects with studentId and grade.
 * @returns {Array} Array of students with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // check arg is an array
  if (Object.getPrototypeOf(students) !== Array.prototype) {
    return [];
  }
  if (Object.getPrototypeOf(newGrades) !== Array.prototype) {
    return [];
  }
  return students.filter((student) => student.location === city).map((student) => {
    const [newGrade] = newGrades.filter((item) => item.studentId === student.id);
    return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
  });
}
