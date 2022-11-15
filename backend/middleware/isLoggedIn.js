const prisma = require("../prisma/index");
import User from '../modules/User.js';
import Reguser from '../modules/registration.js'
import * as dotenv from 'dotenv';
dotenv.config({path:'../.env'});

import jwt from 'jsonwebtoken'

export const isLoggedIn = async(req, res, next) => {
    try {
        const token = req.cookies.token;

        if(!token){
            res.send("Please Login!");
            throw new Error("You are not logged in."); // send a response and close next
        }

        const decoded = jwt.verify(token, process.env.JWTTOKEN);
        req.user = await Reguser.findUnique({
            where: {
                id: decoded.id, // having userId in payload
            }
        });
        // you can do more checks
        next();
    } catch (error) {
        throw new Error(error);
    }
}

