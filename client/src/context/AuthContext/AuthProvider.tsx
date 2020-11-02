import React, { useState, useMemo } from 'react';
import AuthContext, { AuthContextProps } from './index';

export const ACCESS_TOKEN = 'glass_admin_token';
export const REFRESH_TOKEN = 'glass_admin_refresh';

type AuthProviderProps = {
    children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const refresh = localStorage.getItem(REFRESH_TOKEN);
    const logged = !!(token && refresh);
    const user = {};
    const { Provider } = AuthContext;

    const [auth, setAuth] = useState({ token, refresh, logged, user });

    const login = (accessToken: string, accessRefresh: string, userDetails: object): void => {
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, accessRefresh);
        setAuth({ logged: true, refresh, token, user: userDetails });
    };

    const logout = (): void => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        setAuth({ logged: false, token: null, refresh: null, user: {} });
    };

    const value: AuthContextProps = useMemo(
        () => ({
            auth,
            login,
            logout,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [auth]
    );

    return <Provider value={value}>{children}</Provider>;
};

export default AuthProvider;
