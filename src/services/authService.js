const API_URL = 'http://localhost:5000/api/auth';

export async function registerUser(userData) {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Помилка реєстрації');
    }

    return data;
}

export async function loginUser(userData) {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Помилка входу');
    }

    return data;
}

export async function getCurrentUser(token) {
    const response = await fetch(`${API_URL}/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Не вдалося отримати користувача');
    }

    return data.user;
}