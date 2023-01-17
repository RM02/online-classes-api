const express = require("express");
const router = express()

const userHttpAdapter = require("../../application/userHTTPController");
const courseHttpAdapter = require("../../application/courseHttpController");
const auth = require("../services/authService");

const subscriptionService = require("../services/subscriptionService")

router.post("/user/create", async (req, res) => {
    const adapter = new userHttpAdapter(req.body)
    const user = await adapter.create()
    if (user) {
        return res.json({
            data: user,
            status: 200
        })
    } else {
        res.end()
    }
})
router.get("/user/getAll", async (req, res) => {
    const adapter = new userHttpAdapter(req.body)
    const user = await adapter.getAll()
    console.log(user)
    if (user) {
        return res.json(user)
    } else {
        res.end()
    }
})
router.get("/user/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json()
    }
    const adapter = new userHttpAdapter(req.body)

    const user = await adapter.getUser(id)
    
    res.json({
        status: 200,
        data: user
    })
})

router.post("/course/create", async (req, res) => {
    const adapter = new courseHttpAdapter(req.body)
    const data = await adapter.create()
    if (data.status == 200) {
        return res.json(data)
    } else {
        return res.end()
    }
})
router.get("/courses/getAll", async (req, res) => {
    const adapter = new courseHttpAdapter(req.body)
    const data = await adapter.getAll()
    if (data.status == 200) {
        return res.json(data)
    } else {
        return res.end()
    }
})
router.post("/auth/login", async (req, res) => {
    const user = await auth.login(req.body);
    if (!user) {
        return res.status(400).json({})
    } else {
        return res.json({
            data: user,
            status: 200
        })
    }
})
router.post("/course/:id/subscribe/:user", async (req, res) => {
    const { id, user } = req.params;
    if (!id || !user) {
        return res.status(400).json()
    }
    const sub = await subscriptionService.create(id, user)

    return res.json({
        data: sub,
        status: 200
    })
    
})
router.get("/", (req, res) => {
    res.status(200).json({
        data: "Server running",
        status: 200
    })
})

module.exports = router;