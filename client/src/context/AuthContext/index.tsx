import { createContext } from 'react';
import { UserDetails } from 'api/api.interface';

export interface AuthKey {
    token: string | null;
    logged: boolean;
    user: UserDetails | Record<string, unknown>;
}

export interface AuthContextProps {
    auth: AuthKey;
    login: (accessToken: string, userDetails: UserDetails) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | Record<string, unknown>>({});

export default AuthContext;
