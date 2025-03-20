import { createAsyncThunk } from '@reduxjs/toolkit';
import { get_task_details, put_task_status } from '../../api/task_details'

export const fetchTaskDetails = createAsyncThunk(
    'tasks/fetchTasks',
    async ({ id }) => {
        const response = await get_task_details({
            id: id
        })
        return response
    }
)


export const putTaskStatus = createAsyncThunk(
    'tasks/putTaskStatus',
    async ({ id, status_id }, { rejectWithValue }) => {
        try {
            const response = await put_task_status({ 
                id: id,
                status_id: status_id 
            })

            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)