const { createUser, getUsers, getOne } = require("../repo/mySQL");

const save = async (data) => {
    await createUser(data)
}
const edit = (data) => {

}
const remove = (data) => {

}
const getAll = async () => {
    const users = await getUsers()
    return users
}
const getUser = async (id) => {
    const user = await getOne(id)
    return user
}

module.exports = {
    save,
    edit,
    remove,
    getAll,
    getUser
}