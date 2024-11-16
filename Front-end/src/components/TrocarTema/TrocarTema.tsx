import { useEffect } from 'react';
import LogoTrocarTema from '../../assets/svgs/LogoTrocarTema';

const TrocarTema = () => {
    const trocarTema = () => {
        const isDarkMode = document.documentElement.classList.contains('bg-dark');
        document.documentElement.classList.toggle('bg-dark', !isDarkMode);
        document.documentElement.classList.toggle('bg-light', isDarkMode);
        window.localStorage.setItem('tema', isDarkMode ? 'light' : 'dark');
    };

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('tema');
        if (savedTheme) {
            document.documentElement.classList.add(`bg-${savedTheme}`);
        }
    }, []);

    return (
        <button onClick={trocarTema}>
            <LogoTrocarTema />
        </button>
    );
};

export default TrocarTema;