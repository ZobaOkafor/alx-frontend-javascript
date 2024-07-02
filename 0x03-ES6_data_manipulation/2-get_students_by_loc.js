/**
 * Returns an array of students who are located in a specific city.
 * @param {Array} students - Array of student objects.
 * @param {string} city - The city to filter students by.
 * @returns {Array} Array of students in the specified city.
 */
export default function getStudentsByLocation(studentList, city) {
  const newArray = studentList.filter((student) => student.location === city);
  return newArray;
}
