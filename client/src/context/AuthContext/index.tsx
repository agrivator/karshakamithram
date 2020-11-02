import { createContext } from 'react';

export interface User {
    id?: number;
    email?: string;
    isSupervisor?: boolean;
    isActive?: boolean;
}

export interface AuthKey {
    token: string | null;
    refresh: string | null;
    logged: boolean;
    user: User | {};
}

export interface AuthContextProps {
    auth: AuthKey;
    login: (accessToken: string, accessRefresh: string, userDetails: object) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | {}>({});

export default AuthContext;
