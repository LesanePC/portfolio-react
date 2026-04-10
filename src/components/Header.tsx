import { useScroll } from '../hooks/useScroll';

interface HeaderProps {
    toggleTheme: () => void;
    theme: 'light' | 'dark';
}

export const Header = ({ toggleTheme, theme }: HeaderProps) => {
    const { isScrolled } = useScroll(50);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                <div className="header-logo">
                    <a href="#welcome" className="logo">Eugene Fokin</a>
                    <span className="logo-subtitle">Frontend Developer</span>
                </div>
                <button 
                    id="theme-toggle" 
                    onClick={toggleTheme}
                    aria-pressed={theme === 'light'}
                    aria-label="Переключить тему"
                >
                    <span className="lightbulb"></span>
                </button>
            </div>
        </header>
    );
};