/* eslint-disable import/prefer-default-export */
import { Panchayats } from './api.interface';
import request from './request';

/**
 * to get panchayat list
 * @returns {object} details about panchayats
 */
export const getPanchayatList = async (search: string): Promise<Panchayats[]> => {
    const { data, error } = await request<Panchayats[]>({
        url: '/panchayats',
        method: 'GET',
        params: {
            name_contains: search,
        },
    });

    if (error || !data) {
        throw new Error('Fetch Failed');
    }

    return data;
};
