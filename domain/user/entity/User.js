class User {
    constructor (name, last_name, email, password, subscriptions) {
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.subscriptions = subscriptions
    }
}

module.exports = User;