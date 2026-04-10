interface ThemeToggleProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
    return (
        <button 
            id="theme-toggle" 
            onClick={toggleTheme}
            aria-pressed={theme === 'light'}
            aria-label="Переключить тему"
        >
            <i className={`fas fa-${theme === 'light' ? 'sun' : 'moon'}`}></i>
        </button>
    );
};