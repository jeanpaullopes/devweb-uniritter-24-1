export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];
    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(name) {
        this.courseList.push(name);
    }
    getCourseList() {
        return this.courseList;
    }
    set sobreNome(sb) {
        this.sobrenome = sb;
    }
}