import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.login);
                navigate('/admin');
            } else {
                setError(data.error || 'Ошибка входа');
            }
        } catch (err) {
            setError('Ошибка сети. Проверьте подключение к серверу.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: '#111',
            color: '#fff',
            fontFamily: 'Arial, sans-serif',
        }}>
            <form onSubmit={handleSubmit} style={{
                background: '#222',
                padding: '40px',
                borderRadius: '12px',
                width: '100%',
                maxWidth: '400px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#fff' }}>
                Вход в админку
                </h2>
                
                {error && (
                    <div style={{
                        background: '#e74c3c',
                        color: '#fff',
                        padding: '10px',
                        borderRadius: '6px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}>
                        {error}
                    </div>
                )}

                <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#ccc' }}>
                        Логин
                    </label>
                    <input
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="Введите логин"
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '6px',
                            border: '1px solid #555',
                            background: '#333',
                            color: '#fff',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                        }}
                    />
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#ccc' }}>
                        Пароль
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введите пароль"
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '6px',
                            border: '1px solid #555',
                            background: '#333',
                            color: '#fff',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '12px',
                        background: '#00eaff',
                        color: '#111',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s',
                        opacity: loading ? 0.6 : 1,
                    }}
                >
                    {loading ? 'Вход...' : 'Войти'}
                </button>

                <div style={{ marginTop: '16px', fontSize: '14px', color: '#888', textAlign: 'center' }}>
                    Тестовые данные: <strong style={{ color: '#00eaff' }}>admin</strong> / <strong style={{ color: '#00eaff' }}>admin123</strong>
                </div>
            </form>
        </div>
    );
};