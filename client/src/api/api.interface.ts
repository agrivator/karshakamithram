export interface RequestReturn<T> {
    data: T | null;
    error: Record<string, unknown> | null;
}

export interface ErrorHandlerFormat {
    msg: string;
    details: Record<string, unknown>;
}

/**
 * *****************************************************************************
 * Backend Data interfaces
 * *****************************************************************************
 */

/**
 * *****************************************************************************
 * User
 * *****************************************************************************
 */
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

/**
 * *****************************************************************************
 * Farmer
 * *****************************************************************************
 */

export interface Farmer {
    id: number;
    contact: number;
    adhar: string;
    gender: string;
    category: string;
    address: Address;
    bankAccount: BankDetails;
    cultivatedLand: CultivatedLand[];
}

/**
 * *****************************************************************************
 * Utility like pachayat, district etc
 * *****************************************************************************
 */

export interface BankDetails {
    accountHolderName: string;
    accountNumber: string;
    ifsc: string;
}

export interface Address {
    houseName: string;
    wardNumber: number;
    panchayat: Panchayats | Panchayats['id'];
}

export interface CultivatedLand {
    area: number;
    typeOfLand: 'wetLand' | 'gardenLand';
    ownerShip: 'own' | 'lease';
}

export interface Panchayats {
    id: number;
    name: string;
    district: Districts;
}

export interface Districts {
    id: number;
    name: string;
}

/**
 * *****************************************************************************
 * API Interfaces
 * *****************************************************************************
 */
export interface LoginAPI {
    identifier: string;
    password: string;
}

export interface LoginAPIReturn {
    jwt: string;
    user: UserDetails;
}
