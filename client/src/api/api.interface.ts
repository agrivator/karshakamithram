export interface RequestReturn<T> {
    data: T | null;
    error: Record<string, unknown> | null;
}

export interface ErrorHandlerFormat {
    msg: string;
    details: Record<string, unknown>;
}

export interface UserDetails {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role: UserRole;
}

export interface UserRole {
    id: number;
    name: string;
    description: string;
    type: string;
}

export interface LoginAPI {
    identifier: string;
    password: string;
}

export interface LoginAPIReturn {
    jwt: string;
    user: UserDetails;
}
