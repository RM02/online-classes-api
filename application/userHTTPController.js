
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10

const UserManager = require("../domain/user/services/userManager");
const { save, getAll, getUser } = require("../infra/services/userService");

class UserHttpController {
    constructor (obj) {
        this.data = obj;
    }
    async create () {
        if (!this.data.password) {
            return
        }

        this.data.id = uuidv4();
        const passHashed = await bcrypt.hash(this.data.password, saltRounds);
        this.data.password = passHashed;
        
        const userService = UserManager()
        const user = userService.create(this.data)
        
        if (user) {
            await save(user)
        }
        return user
    }
    async getAll () {
        const users = await getAll();
        return users
    }
    async getUser (id) {
        const user = await getUser(id);
        return user
    }
}
module.exports = UserHttpController