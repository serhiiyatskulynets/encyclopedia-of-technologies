import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/database.js';

function createToken(user) {
    return jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
}

export async function registerUser(req, res, next) {
    try {
        const { email, password } = req.body;

        if (
            typeof email !== 'string' ||
            typeof password !== 'string' ||
            !email.trim() ||
            !password
        ) {
            return res.status(400).json({
                message: 'Введіть email та пароль',
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: 'Пароль повинен містити щонайменше 8 символів',
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const existingUser = db.prepare(
            'SELECT id FROM users WHERE email = ?'
        ).get(normalizedEmail);

        if (existingUser) {
            return res.status(409).json({
                message: 'Користувач із таким email вже існує',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = db.prepare(`
            INSERT INTO users (email, password)
            VALUES (?, ?)
        `).run(normalizedEmail, hashedPassword);

        const user = db.prepare(`
            SELECT id, email, created_at
            FROM users
            WHERE id = ?
        `).get(result.lastInsertRowid);

        const token = createToken(user);

        return res.status(201).json({
            message: 'Registration successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                createdAt: user.created_at,
            },
        });
    } catch (error) {
        next(error);
    }
}

export async function loginUser(req, res, next) {
    try {
        const { email, password } = req.body;

        if (
            typeof email !== 'string' ||
            typeof password !== 'string' ||
            !email.trim() ||
            !password
        ) {
            return res.status(400).json({
                message: 'Введіть email та пароль',
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const user = db.prepare(`
            SELECT id, email, password, created_at
            FROM users
            WHERE email = ?
        `).get(normalizedEmail);

        if (!user) {
            return res.status(401).json({
                message: 'Неправильний email або пароль',
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: 'Неправильний email або пароль',
            });
        }

        const token = createToken(user);

        return res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                createdAt: user.created_at,
            },
        });
    } catch (error) {
        next(error);
    }
}

export function getCurrentUser(req, res, next) {
    try {
        const user = db.prepare(`
            SELECT id, email, created_at
            FROM users
            WHERE id = ?
        `).get(req.user.userId);

        if (!user) {
            return res.status(404).json({
                message: 'Користувача не знайдено',
            });
        }

        return res.status(200).json({
            user: {
                id: user.id,
                email: user.email,
                createdAt: user.created_at,
            },
        });
    } catch (error) {
        next(error);
    }
}
