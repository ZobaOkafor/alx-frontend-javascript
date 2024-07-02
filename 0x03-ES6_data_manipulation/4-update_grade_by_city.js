/**
 * Returns an array of students for a specific city with their new grade.
 * @param {Array} students - Array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - Array of objects with studentId and grade.
 * @returns {Array} Array of students with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const gradeRecord = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A'
      };
    });
}
