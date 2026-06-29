import { useState, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactsProps {
    onOpenPrivacyModal: () => void;
}

export const Contacts = ({ onOpenPrivacyModal }: ContactsProps) => {
    const sectionRef = useScrollAnimation();
    const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({ message: '', type: '' });
    const [copyMessage, setCopyMessage] = useState('');
    const [isConsentChecked, setIsConsentChecked] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleCopyEmail = async () => {
        const email = 'evgen94@bk.ru';
        try {
            await navigator.clipboard.writeText(email);
            setCopyMessage('Email скопирован!');
            setTimeout(() => setCopyMessage(''), 2000);
        } catch (err) {
            console.error('Ошибка копирования:', err);
            setCopyMessage('Не удалось скопировать');
            setTimeout(() => setCopyMessage(''), 2000);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        const name = (formData.get('name') as string)?.trim();
        const email = (formData.get('email') as string)?.trim();
        const message = (formData.get('message') as string)?.trim();

        if (!name || !email || !message) {
            setFormStatus({ message: 'Пожалуйста, заполните все поля', type: 'error' });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setFormStatus({ message: 'Введите корректный email', type: 'error' });
            return;
        }

        if (!isConsentChecked) {
            setFormStatus({ message: 'Необходимо дать согласие на обработку персональных данных', type: 'error' });
            return;
        }

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData,
            });

            if (response.ok) {
                setFormStatus({ message: 'Спасибо за ваше сообщение!', type: 'success' });
                form.reset();
                setIsConsentChecked(false);
            } else {
                setFormStatus({ message: 'Ошибка при отправке. Попробуйте позже.', type: 'error' });
            }
        } catch (error) {
            console.error('Network error:', error);
            setFormStatus({ message: 'Ошибка сети. Проверьте подключение.', type: 'error' });
        }
    };

    return (
        <section ref={sectionRef} className="section" id="contacts">
            <div className="contacts-container">
                <div className="contact-info">
                    <h2>Свяжитесь со мной</h2>
                    <p>
                        Буду рад обсудить ваши проекты, сотрудничество, поделиться идеями 
                        или ответить на вопросы о своих работах.
                    </p>
                    
                    <div className="email-copy">
                        <div className="email-display">
                            <span className="email-address">evgen94@bk.ru</span>
                            <button className="copy-email-btn" onClick={handleCopyEmail}>
                                <i className="fas fa-copy"></i> Копировать
                            </button>
                        </div>
                        {copyMessage && <div className="copy-message" style={{ display: 'block' }}>{copyMessage}</div>}
                    </div>
                    
                    <p>Спасибо!</p>
                    
                    <div className="social-icons">
                        <a href="https://github.com/LesanePC" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://t.me/eugene_1312" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <i className="fab fa-telegram"></i>
                        </a>
                        <a href="https://vk.com/3amepmup" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="VK">
                            <i className="fab fa-vk"></i>
                        </a>
                        <a href="https://wa.me/79689605431" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <form 
                    ref={formRef}
                    action="https://formspree.io/f/meoryqdl" 
                    method="POST" 
                    className="contact-form" 
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <label htmlFor="name">Ваше имя:</label>
                    <input type="text" id="name" name="name" placeholder="Введите имя" required aria-required="true" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Введите email" required autoComplete="email" aria-required="true" />

                    <label htmlFor="message">Сообщение:</label>
                    <textarea id="message" name="message" placeholder="Ваше сообщение" required aria-required="true"></textarea>

                    {/* Чекбокс согласия */}
                    <div className="form-group checkbox-group">
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={isConsentChecked}
                            onChange={(e) => setIsConsentChecked(e.target.checked)}
                            required
                            aria-required="true"
                            aria-invalid={!isConsentChecked && formStatus.type === 'error'}
                        />
                        <label htmlFor="consent">
                            Я согласен на обработку персональных данных в соответствии с 
                            <a 
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onOpenPrivacyModal();
                                }}
                                aria-label="Политика конфиденциальности"
                            >
                                политикой конфиденциальности
                            </a>
                        </label>
                    </div>

                    <button type="submit">Отправить</button>

                    {formStatus.message && (
                        <div 
                            className={`form-message ${formStatus.type === 'success' ? 'success' : 'error'}`}
                            role="alert"
                            aria-live="polite"
                        >
                            {formStatus.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};