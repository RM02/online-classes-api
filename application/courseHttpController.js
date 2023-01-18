const { v4: uuidv4 } = require('uuid');
const CourseManager = require("../domain/course/service/courseManager");
const { save, getMany } = require("../infra/services/courseService");

class CourseHttpController {
    constructor (obj) {
        this.data = obj.data;
    }
    async create () {
        const courseService = CourseManager();
        const course = courseService.create(this.data);
        if (course) {
            await save(course)
        }
        return course
    }
    async getAll () {
        const data = await getMany()
        return data
    }
}
module.exports = CourseHttpController