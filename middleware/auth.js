const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
const  User = require('../models/users');
const { JWT_SECRET } = process.env;


const auth = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");


    try {
        if (bearer !== "Bearer") {
            throw new Unauthorized("Not authorized");
        }

        const { id } =  jwt.verify(token, JWT_SECRET);// id me retorna undefined
        console.log (id)
        const user = await User.findById(id);
        console.log ({user})
        if (!user || !user.token) {
            throw new Unauthorized("Not authorized");
        }
        req.user = { userId: user._id }
    } catch (error) {
        console.log({error})
        if (error.message === "invalid signature") {
            error.status = 401;
        }
        next(error);
    }
};

module.exports = auth;
