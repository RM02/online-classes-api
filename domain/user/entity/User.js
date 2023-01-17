class User {
    constructor (id, name, last_name, email, password, subscriptions) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.subscriptions = subscriptions
    }
    static get FullName() {
        return `${this.name} ${this.last_name}`
    }
}

module.exports = User;