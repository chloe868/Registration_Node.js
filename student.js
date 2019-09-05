class Student {
    constructor(name) {
        this.name = name;
        this.course = {};
        this.schedule = {};
    }
    setName(name) {
        this.name = name;
    }

    addSchedule(day, time) {
        this.schedule[day] = time;
    }

    addCourse(course, year) {
        this.course[course] = year;
    }
}
module.exports = Student;

