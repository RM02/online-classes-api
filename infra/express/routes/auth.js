const auth = require("../../services/authService");

exports.login = async (req, res) => {
    const user = await auth.login(req.body);
    if (!user) {
        return res.status(400).json({
            status: 400,
            msg: "User not found"
        })
    } else {
        return res.json({
            data: user,
            status: 200
        })
    }
}
