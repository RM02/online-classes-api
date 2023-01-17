const { getUser } = require("../repo/mySQL");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const login = async (data) => {

    const EXPIRE_TOKEN = "1h"
    const { email, password } = data;
    
    if (!(email && password)) {
        return
    }  
    const user = await getUser(data)

    if (user && (await bcrypt.compare(password, user.password))) {
        delete user.password;
        
        const token = jwt.sign({ user }, "token", { expiresIn: EXPIRE_TOKEN });
        
        const response = {
            "user": user,
            "accessToken": token
        };
        return response

    } else {
        return
    }

}

module.exports = {
    login
}