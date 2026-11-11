import { registerUser, loginUser, getCurrentUser, } from '../controllers/authController.js';

export async function handleAuthRoutes(req, res, url, sendResponse) {
    if (
        url.pathname === '/api/auth/register' &&
        req.method === 'POST'
    ) {
        return registerUser(req, res, sendResponse);
    }

    if (
        url.pathname === '/api/auth/login' &&
        req.method === 'POST'
    ) {
        return loginUser(req, res, sendResponse);
    }

    if (
        url.pathname === '/api/auth/me' &&
        req.method === 'GET'
    ) {
        return getCurrentUser(req, res, sendResponse);
    }

    return false;
}