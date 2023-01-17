const Course = require("../entity/course");

const CourseManager = () => {
    
    const create = (data) => {
        const course = new Course(data)
        return course
    }
    const edit = (data) => {
        const user = new Course(data.name, data.last_name, data.email, data.password)
        return user
    }
    return {
        create,
        edit
    }
}
module.exports = CourseManager;