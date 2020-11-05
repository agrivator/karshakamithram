/* eslint-disable import/prefer-default-export */
import request from './request';
import { Farmer } from './api.interface';

export const addFarmer = async (farmerDetails: Farmer): Promise<void> => {
    const { data, error } = await request({
        url: '/farmers',
        method: 'POST',
        data: farmerDetails,
    });

    if (error || !data) {
        throw new Error('Given credentials not matching');
    }
};
