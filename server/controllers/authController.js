import db from '../config/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authenticateToken } from '../middleware/authMiddleware.js';

export async function registerUser(req, res, sendResponse) {
    try {
        let body = '';

        for await (const chunk of req) {
            body += chunk;

            if (body.length > 1024 * 1024) {
                return sendResponse(res, 413, {
                    message: 'Request body is too large',
                });
            }
        }

        const { email, password } = JSON.parse(body);

        if (!email || !password) {
            return sendResponse(res, 400, {
                message: 'Email and password are required',
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(normalizedEmail)) {
            return sendResponse(res, 400, {
                message: 'Invalid email format',
            });
        }

        if (typeof password !== 'string' || password.length < 8) {
            return sendResponse(res, 400, {
                message: 'Password must contain at least 8 characters',
            });
        }

        const existingUser = db
            .prepare('SELECT id FROM users WHERE email = ?')
            .get(normalizedEmail);

        if (existingUser) {
            return sendResponse(res, 409, {
                message: 'User with this email already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = db
            .prepare(
                'INSERT INTO users (email, password) VALUES (?, ?)'
            )
            .run(normalizedEmail, hashedPassword);

        const user = db
            .prepare(
                'SELECT id, email, created_at FROM users WHERE id = ?'
            )
            .get(result.lastInsertRowid);

        return sendResponse(res, 201, {
            message: 'Registration successful',
            user: {
                id: user.id,
                email: user.email,
                createdAt: user.created_at,
            },
        });
    } catch (error) {
        if (error instanceof SyntaxError) {
            return sendResponse(res, 400, {
                message: 'Invalid JSON',
            });
        }

        console.error('Registration error:', error);

        return sendResponse(res, 500, {
            message: 'Internal server error',
        });
    }
}

export async function loginUser(req, res, sendResponse) {
    try {
        let body = '';

        for await (const chunk of req) {
            body += chunk;

            if (body.length > 1024 * 1024) {
                return sendResponse(res, 413, {
                    message: 'Request body is too large',
                });
            }
        }

        const { email, password } = JSON.parse(body);

        if (
            typeof email !== 'string' ||
            typeof password !== 'string' ||
            !email.trim() ||
            !password
        ) {
            return sendResponse(res, 400, {
                message: 'Email and password are required',
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const user = db
            .prepare('SELECT id, email, password FROM users WHERE email = ?')
            .get(normalizedEmail);

        if (!user) {
            return sendResponse(res, 401, {
                message: 'Invalid email or password',
            });
        }

        const passwordIsValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordIsValid) {
            return sendResponse(res, 401, {
                message: 'Invalid email or password',
            });
        }

        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not configured');
        }

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return sendResponse(res, 200, {
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
            },
        });
    } catch (error) {
        if (error instanceof SyntaxError) {
            return sendResponse(res, 400, {
                message: 'Invalid JSON',
            });
        }

        console.error('Login error:', error);

        return sendResponse(res, 500, {
            message: 'Internal server error',
        });
    }
}

export function getCurrentUser(req, res, sendResponse) {
    const decoded = authenticateToken(req, res, sendResponse);

    if (!decoded) {
        return;
    }

    try {
        const user = db
            .prepare(
                'SELECT id, email, created_at FROM users WHERE id = ?'
            )
            .get(decoded.userId);

        if (!user) {
            return sendResponse(res, 404, {
                message: 'User not found',
            });
        }

        return sendResponse(res, 200, {
            user: {
                id: user.id,
                email: user.email,
                createdAt: user.created_at,
            },
        });
    } catch (error) {
        console.error('Get current user error:', error);

        return sendResponse(res, 500, {
            message: 'Internal server error',
        });
    }
}