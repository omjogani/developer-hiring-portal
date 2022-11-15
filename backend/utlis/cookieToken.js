import * as dotenv from 'dotenv';
dotenv.config({path:'../.env'});
import jwt from 'jsonwebtoken'

 const getJwtToken = (id) => {
    return jwt.sign({id}, process.env.JWTTOKEN, {expiresIn: '1d'});
}

const cookieToken = (user, res) => {
    const token = getJwtToken(user._id);
    
    const options = {
        expires: new Date(
            Date.now() + 3 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true // This is server only cookie - can be manage by cookie
    };
    user.password = undefined; // we don't want to pass password
    
    // setting cookie
    res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        user
    });
}
export default cookieToken

