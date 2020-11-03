/* eslint-disable import/prefer-default-export */
import request from './request';
import { LoginAPI, LoginAPIReturn, UserDetails } from './api.interface';

/**
 * to login the user
 * @param userDetails - contains info on the user
 */
export const loginAPI = async (userDetails: LoginAPI): Promise<LoginAPIReturn> => {
    const { data, error } = await request<LoginAPIReturn>({
        url: '/auth/local',
        method: 'POST',
        data: userDetails,
    });

    if (error || !data) {
        throw new Error('Login Failed');
    }

    return data;
};

/**
 * to get logged in user's details
 * @returns {object} details about user
 */
export const getUserDetails = async (): Promise<UserDetails> => {
    const { data, error } = await request<UserDetails>({
        url: '/users/me',
        method: 'GET',
    });

    if (error || !data) {
        throw new Error('Login Failed');
    }

    return data;
};
