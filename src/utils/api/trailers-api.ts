import { ITrailer } from '@/types';
import axios from 'axios'
import { BASE_URL } from './api';

export const trailersApi = {
    async getTrailers() {
        const response = await axios.get<ITrailer[]>(`${BASE_URL}/api/trailers`);
        const trailers = response.data

        return trailers;
    },
}