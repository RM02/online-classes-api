const User = require("../entity/User");

const UserManager = () => {
    
    const create = (data) => {
        const user = new User(data.name, data.last_name, data.email, data.password, data.subscriptions)
        return user
    }
    const edit = (data) => {
        const user = new User(data.name, data.last_name, data.email, data.password)
        return user
    }
    return {
        create,
        edit
    }
}
module.exports = UserManager;