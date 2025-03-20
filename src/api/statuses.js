import axios from '../utils/axios';

export const get_statuses = async () => {
    const response = await axios.get('/statuses')
    return response.data;
}
