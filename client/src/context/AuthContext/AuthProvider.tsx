import React, { useState, useMemo } from 'react';
import { UserDetails } from 'api/api.interface';
import AuthContext, { AuthContextProps } from './index';

export const ACCESS_TOKEN = 'karshakamithram_admin_token';

type AuthProviderProps = {
    children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const logged = !!token;
    const user = {};
    const { Provider } = AuthContext;

    const [auth, setAuth] = useState({ token, logged, user });

    const login = (accessToken: string, userDetails: UserDetails): void => {
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        setAuth({ logged: true, token: accessToken, user: userDetails });
    };

    const logout = (): void => {
        localStorage.removeItem(ACCESS_TOKEN);
        setAuth({ logged: false, token: null, user: {} });
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
