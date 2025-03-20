import axios from '../utils/axios';

export const get_task_details = async ({ id }) => {
    const response = await axios.get(`/tasks/${id}`)
    return response.data;
}

export const put_task_status = async ({ id, status_id }) => {
    const response = await axios.put(`/tasks/${id}`, { status_id: status_id })
    return response.data
} 