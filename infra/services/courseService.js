const { 
    createCourse,
    getCourses
} = require("../repo/database");

const save = async (data) => {
    await createCourse(data)
}
const edit = (data) => {

}
const remove = (data) => {

}
const getMany = async () => {
    const data = await getCourses()
    return data
}

module.exports = {
    save,
    edit,
    remove,
    getMany
}