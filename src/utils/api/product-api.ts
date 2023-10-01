import { FilterEnum, IProduct } from '@/types';
import axios from 'axios'
import { BASE_URL } from './api';

export const productApi = {
    async getPhones() {
        const response = await axios.get<IProduct[]>(`${BASE_URL}/api/products/phones`);
        const phones = response.data

        return phones;
    },

    async getCurrentPhone(id: string) {
        const response = await axios.get<IProduct>(`${BASE_URL}/api/products/phones/${id}`);
        const currentPhone = response.data

        return currentPhone;
    },

    async getDevices(activeFilter?: FilterEnum) {
        const response = await axios.get<IProduct[]>(`${BASE_URL}/api/products/devices${activeFilter ? '?filter=' + activeFilter : ''}`);
        const devices = response.data

        return devices;
    },

    async getCurrentDevice(id: string) {
        const response = await axios.get<IProduct>(`${BASE_URL}/api/products/devices/${id}`);
        const currentdDvice = response.data

        return currentdDvice;
    },
}