const subject = {
    name: 'Physics',
    teacher: 'John',
    students: ['Mark', 'Tom', 'Jane'],
    classSize: 3,
    headOfDepartment: 'Mr. Smith'
}

// Destructuring the object
const { name, teacher, students, classSize ,headOfDepartment:HOD } = subject;
console.log(name, teacher, students, classSize, HOD)
