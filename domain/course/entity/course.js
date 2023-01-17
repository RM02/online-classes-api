class Course {
    constructor (data) {
        this.id = data.id;
        this.subject = data.subject;
        this.description = data.description;
        this.category = data.category;
        this.published = false;
        this.subscriptions = data.subscriptions;
        this.createdAt = new Date().toLocaleString()
    }
}

module.exports = Course;