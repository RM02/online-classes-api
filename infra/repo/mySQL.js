const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const createCourse = async (data) => {
    await prisma.course.create({
        data: data,
    })
}
const getCourses = async () => {
    const data = await prisma.course.findMany({
        include: {
            subscriptions: true
        }
    })
    return data
}
const createUser = async (data) => {
    await prisma.user.create({
        data: data,
    })
}
const getUser = async (data) => {
    const user = await prisma.user.findUnique({
        where: {
          email: data.email,
        },
    })
    return user
}
const getOne = async (id) => {
    const user = await prisma.user.findMany({
        where: {
            id: id
        },
        select: {
            id: true,
            subscriptions: {
                select: {
                    courses: true
                }
            }
        }
    })
    return user
}
const getUsers = async () => {
    const user = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            subscriptions: {
                select: {
                    id: true,
                    name: true,
                    courses: true
                }
            }
        }
    })
    return user
}

const createSubscription = async (courseId, userId) => {
    const subs = await prisma.subscription.create({
        data: {
            name: "test",
            effectiveDate: "created date",
            user: {
                connect: { id: userId }
            },
            courses: {
                connect: { id: courseId },
            }
        }
    })
    return subs
}
const getSubscriptions = async () => {
    const subs = await prisma.subscription.findMany({
        include: {
            courses: true
        }
    })
    return subs
}
module.exports = {
    createCourse,
    createUser,
    getUser,
    getUsers,
    getOne,
    getCourses,
    createSubscription,
    getSubscriptions
};