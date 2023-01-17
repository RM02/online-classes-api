const { v4: uuidv4 } = require('uuid');
const CourseManager = require("../domain/course/service/courseManager");
const { save, getMany } = require("../infra/services/courseService");

class CourseHttpController {
    constructor (obj) {
        this.data = obj.data;
    }
    async create () {
        this.data.id = uuidv4();
        const courseService = CourseManager();
        const course = courseService.create(this.data);
        if (course) {
            await save(course)
        }
        const res = {
            data: course,
            status: 200,
        }
        return res
    }
    async getAll () {
        const data = await getMany()
        const res = {
            data: data,
            status: 200
        }
        return res
    }
}
module.exports = CourseHttpController