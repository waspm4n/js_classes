const students = [{
    name: "Osman",
    grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
},
    {
        name: "namso",
        grades: [6,8,9,7,10,8,8]
}
];
const topStudent = students.map(student => ({
    
    prosecnaOcena: student.grades.reduce((a, b) => a + b, 0) / student.grades.length,
    ...student,
}));
console.log(topStudent)