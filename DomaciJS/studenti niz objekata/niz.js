const students = [  {    name: "John",    lastName: "Doe",    grades: [9, 8, 9, 9, 10],
    classes: ["Math", "History", "English", "Science", "Art"]
  },
  {
    name: "Jane",
    lastName: "Doe",
    grades: [6, 7, 6, 7, 8],
    classes: ["Math", "History", "English", "Science", "Art"]
  },
  {
    name: "Jim",
    lastName: "Smith",
    grades: [10, 10, 10, 10, 10],
    classes: ["Math", "History", "English", "Science", "Art"]
  },
  {
    name: "Emily",
    lastName: "Johnson",
    grades: [9, 8, 9, 9, 8],
    classes: ["Math", "History", "English", "Science", "Art"]
  },
  {
    name: "William",
    lastName: "Brown",
    grades: [7, 8, 7, 8, 7],
    classes: ["Math", "History", "English", "Science", "Art"]
  },
  {
    name: "Michael",
    lastName: "Davis",
    grades: [8, 9, 8, 9, 8],
    classes: ["Math", "History", "English", "Science", "Art"]
  },
  {
    name: "Sarah",
    lastName: "Miller",
    grades: [10, 9, 10, 9, 10],
    classes: ["Math", "History", "English", "Science", "Art"]
  },
  {
    name: "David",
    lastName: "Wilson",
    grades: [6, 7, 6, 7, 6],
    classes: ["Math", "History", "English", "Science", "Art"]
  },
  {
    name: "Jessica",
    lastName: "Wilson",
    grades: [9, 9, 9, 9, 9],
    classes: ["Math", "History", "English", "Science", "Art"]
  },
  {
    name: "Elizabeth",
    lastName: "Green",
    grades: [8, 8, 8, 8, 8],
    classes: ["Math", "History", "English", "Science", "Art"]
  }
];
function calculateAverageGrade(students) {
    return students.grades.reduce((total, grade) => total + grade, 0) / students.grades.length;
};
  function filterStudentssAboveAverageGrade(studentss) {
    return studentss.filter(students => calculateAverageGrade(students) <= 8);
};
console.log(students);