import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, sendResponse) {
   
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        sendResponse(res, 401, {
            message: 'Access token is required',
        });

        return null;
    }

    const token = authHeader.split(' ')[1];

    try {
       
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        return decoded;
    } catch {
        sendResponse(res, 403, {
            message: 'Invalid or expired token',
        });

        return null;
    }
}