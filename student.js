class Student {
    constructor(id, name, course, email) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.email = email;
    }
    displayDetails() {
    return `Student ID: ${this.id},
Student Name: ${this.name},
Course: ${this.course},
Email: ${this.email}`;
    }
    getStudentName() {
    return this.name;
    }
    getStudentEmail() {
        return this.email;
    }
}
module.exports = Student;