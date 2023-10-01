import { FilterEnum, IProduct } from '@/types';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from './api';

interface ProductApi {
  getPhones: () => Promise<IProduct[]>;
  getCurrentPhone: (id: string) => Promise<IProduct>;
  getDevices: (activeFilter?: FilterEnum) => Promise<IProduct[]>;
  getCurrentDevice: (id: string) => Promise<IProduct>;
}

export const productApi: ProductApi = {
  async getPhones() {
    try {
      const response: AxiosResponse<IProduct[]> = await axios.get(`${BASE_URL}/api/products/phones`);
      const phones: IProduct[] = response.data;

      return phones;
    } catch (err) {
      throw new Error("error")
    }
  },

  async getCurrentPhone(id: string) {
    const response: AxiosResponse<IProduct> = await axios.get(`${BASE_URL}/api/products/phones/${id}`);
    const currentPhone: IProduct = response.data;

    return currentPhone;
  },

  async getDevices(activeFilter?: FilterEnum) {
    const response: AxiosResponse<IProduct[]> = await axios.get(`${BASE_URL}/api/products/devices${activeFilter ? '?filter=' + activeFilter : ''}`);
    const devices: IProduct[] = response.data;

    return devices;
  },

  async getCurrentDevice(id: string) {
    const response: AxiosResponse<IProduct> = await axios.get(`${BASE_URL}/api/products/devices/${id}`);
    const currentDevice: IProduct = response.data;

    return currentDevice;
  },
};
