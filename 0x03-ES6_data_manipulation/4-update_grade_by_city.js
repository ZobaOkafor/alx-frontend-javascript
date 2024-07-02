/**
 * Returns an array of students for a specific city with their new grade.
 * @param {Array} students - Array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - Array of objects with studentId and grade.
 * @returns {Array} Array of students with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.reduce((acc, student) => {
    if (student.location === city) {
      const gradeRecord = newGrades.find(grade => grade.studentId === student.id);
      acc.push({
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A'
      });
    }
    return acc;
  }, []);
}
