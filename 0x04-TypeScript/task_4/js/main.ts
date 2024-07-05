import { Subjects, cTeacher } from '../js/subjects';

// For Cpp subject
console.log("C++");
Subjects.cpp.setTeacher = cTeacher;
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// For Java subject
console.log("\nJava");
Subjects.java.setTeacher = cTeacher;
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

// For React subject
console.log("\nReact");
Subjects.react.setTeacher = cTeacher;
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
