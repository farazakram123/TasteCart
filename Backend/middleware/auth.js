import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const {token} = req.headers;
    
    if(!token) {
        return res.status(401).json({
            success: false,
            message: 'Not Authorized, Login again'
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!req.body) req.body = {};
        req.body.userId = decoded.id;
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message
        });

    }
}

export default authMiddleware;