const userHttpAdapter = require("../../../application/userHTTPController");

exports.create = async (req, res) => {
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
}
exports.getAll = async () => {
    const adapter = new userHttpAdapter(req.body)
    const user = await adapter.getAll()
    console.log(user)
    if (user) {
        return res.json(user)
    } else {
        res.end()
    }
}
exports.getOne = async (req, res) => {
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
}