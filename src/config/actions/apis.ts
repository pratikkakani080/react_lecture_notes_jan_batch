import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk
export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            return response.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);