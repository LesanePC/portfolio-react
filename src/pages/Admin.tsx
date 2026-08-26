import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const navigate = useNavigate();

    // --- API URL из переменной окружения ---
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const getToken = () => localStorage.getItem('token');

    const fetchLeads = async () => {
        const token = getToken();
        if (!token) {
            navigate('/login');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/admin/leads`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login');
                return;
            }

            if (!response.ok) throw new Error('Ошибка загрузки');
            const data = await response.json();
            setLeads(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const deleteLead = async (id: number) => {
        if (!confirm(`Удалить заявку #${id}?`)) return;
        
        setDeletingId(id);
        try {
            const token = getToken();
            const response = await fetch(`${API_URL}/api/admin/leads/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login');
                return;
            }

            if (response.ok) {
                setLeads(leads.filter(lead => lead.id !== id));
            } else {
                alert('Ошибка при удалении');
            }
        } catch (err) {
            alert('Ошибка сети');
        } finally {
            setDeletingId(null);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}>Загрузка заявок...</div>;
    if (error) return <div style={{ padding: '20px', color: 'red' }}>Ошибка: {error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>Заявки ({leads.length})</h1>
                <div>
                    <button 
                        onClick={fetchLeads} 
                        style={{ padding: '8px 16px', cursor: 'pointer', marginRight: '10px' }}
                    >
                        Обновить
                    </button>
                    <button 
                        onClick={logout} 
                        style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px' }}
                    >
                        Выйти
                    </button>
                </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#333', color: '#fff' }}>
                        <th style={{ padding: '10px', border: '1px solid #555' }}>ID</th>
                        <th style={{ padding: '10px', border: '1px solid #555' }}>Имя</th>
                        <th style={{ padding: '10px', border: '1px solid #555' }}>Email</th>
                        <th style={{ padding: '10px', border: '1px solid #555' }}>Сообщение</th>
                        <th style={{ padding: '10px', border: '1px solid #555' }}>Дата</th>
                        <th style={{ padding: '10px', border: '1px solid #555' }}>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.length === 0 ? (
                        <tr>
                            <td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>
                                Пока нет заявок
                            </td>
                        </tr>
                    ) : (
                        leads.map((lead) => (
                            <tr key={lead.id} style={{ borderBottom: '1px solid #555' }}>
                                <td style={{ padding: '10px', border: '1px solid #555' }}>{lead.id}</td>
                                <td style={{ padding: '10px', border: '1px solid #555' }}>{lead.name}</td>
                                <td style={{ padding: '10px', border: '1px solid #555' }}>{lead.email}</td>
                                <td style={{ padding: '10px', border: '1px solid #555' }}>{lead.message}</td>
                                <td style={{ padding: '10px', border: '1px solid #555' }}>
                                    {new Date(lead.createdAt).toLocaleString()}
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #555', textAlign: 'center' }}>
                                    <button
                                        onClick={() => deleteLead(lead.id)}
                                        disabled={deletingId === lead.id}
                                        style={{
                                            padding: '4px 12px',
                                            backgroundColor: '#e74c3c',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            opacity: deletingId === lead.id ? 0.5 : 1,
                                        }}
                                    >
                                        {deletingId === lead.id ? '' : ' Удалить'}
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};