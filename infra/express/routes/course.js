const courseHttpAdapter = require("../../../application/courseHttpController");
const subscriptionService = require("../../services/subscriptionService")

exports.subscribe = async (req, res) => {
    const { id, user } = req.params;
    
    if (!id || !user) {
        return res.status(400).json({
            msg: "Missing params",
            status: 400
        })
    }
    const sub = await subscriptionService.create(id, user)

    return res.json({
        data: sub,
        status: 200
    })
}
exports.create = async (req, res) => {
    
    const adapter = new courseHttpAdapter(req.body)
    const data = await adapter.create()

    if (!data) {
        return res.status(400).json({
            data: data,
            status: 400
        })
    }

    return res.json({
        data: data,
        status: 200
    })
}
exports.getAll = async (req, res) => {

    const adapter = new courseHttpAdapter(req.body)
    const data = await adapter.getAll()
    
    if (!data) {
        res.end()
    }

    return res.json({
        status: 200,
        data: data
    })
}
exports.ping = (req, res) => {
    return res.json({
        data: "pong"
    })
}