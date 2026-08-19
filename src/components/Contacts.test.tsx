import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Contacts } from './Contacts';

describe('Contacts', () => {
    beforeEach(() => {
        global.IntersectionObserver = class IntersectionObserver {
            constructor() {}
            observe() {}
            unobserve() {}
            disconnect() {}
        } as any;
    });

    it('checkbox is unchecked by default', () => {
        render(<Contacts onOpenPrivacyModal={() => {}} />);
        const checkbox = screen.getByRole('checkbox', { name: /я согласен/i });
        expect(checkbox).not.toBeChecked();
    });

    it('checkbox can be checked and unchecked', () => {
        render(<Contacts onOpenPrivacyModal={() => {}} />);
        const checkbox = screen.getByRole('checkbox', { name: /я согласен/i });
        
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        
        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
    });

    it('displays error message if form submitted without checkbox', async () => {
        render(<Contacts onOpenPrivacyModal={() => {}} />);
        
        fireEvent.change(screen.getByLabelText(/ваше имя/i), {
            target: { value: 'Тест' },
        });
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByLabelText(/сообщение/i), {
            target: { value: 'Тестовое сообщение' },
        });
        
        const submitButton = screen.getByRole('button', { name: /отправить/i });
        fireEvent.click(submitButton);
        
        const errorMessage = await screen.findByText(/необходимо дать согласие/i);
        expect(errorMessage).toBeInTheDocument();
    });

    it('calls onOpenPrivacyModal when link is clicked', () => {
        const mockOpenModal = vi.fn();
        render(<Contacts onOpenPrivacyModal={mockOpenModal} />);
        
        const link = screen.getByText(/политикой конфиденциальности/i);
        fireEvent.click(link);
        
        expect(mockOpenModal).toHaveBeenCalledTimes(1);
    });
});