import { handleAuthRoutes } from './routes/authRoutes.js';
import 'dotenv/config';
import http from 'node:http';
import db from './config/database.js';

const PORT = process.env.PORT || 5000;

function sendResponse(res, statusCode, data) {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    });

    res.end(JSON.stringify(data));
}

const server = http.createServer(async(req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': 'http://localhost:5173',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        });

        return res.end();
    }

    if (url.pathname === '/api/test' && req.method === 'GET') {
        return sendResponse(res, 200, {
            message: 'Server is working!',
        });
    }

    if (url.pathname === '/api/health' && req.method === 'GET') {
        try {
            db.prepare('SELECT 1').get();

            return sendResponse(res, 200, {
                message: 'Server and database are working!',
            });
        } catch {
            return sendResponse(res, 500, {
                message: 'Database connection error',
            });
        }
    }

    const authHandled = await handleAuthRoutes(req, res, url, sendResponse);
    if (authHandled !== false) {
        return;
    }

    return sendResponse(res, 404, {
        message: 'Route not found',
    });
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});