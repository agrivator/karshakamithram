import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default (): [Theme, () => void] => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = (): void => {
        if (theme === 'dark') {
            setTheme('light');
            window.localStorage.setItem('glass_admin_theme', 'light');
        } else {
            setTheme('dark');
            window.localStorage.setItem('glass_admin_theme', 'dark');
        }
    };

    /**
     * on mount checks for darkmode prevailing settings
     * on checks for current pc settings of ui for darkmode or not
     */
    useEffect(() => {
        const localTheme = localStorage.getItem('glass_admin_theme') as Theme;
        if (localTheme) {
            setTheme(localTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('light');
        }
    }, []);
    return [theme, toggleTheme];
};
