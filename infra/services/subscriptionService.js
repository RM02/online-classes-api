const { createSubscription, getSubscriptions } = require("../repo/database")

const create = async (courseId, userId) => {
    const subs = await createSubscription(courseId, userId)
    return subs
}
const getAll = async () => {
    const all_subs = await getSubscriptions()
    return all_subs
}
module.exports = {
    create,
    getAll
}