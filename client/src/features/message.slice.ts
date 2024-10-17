import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApiClient } from "../api/client";

export interface MessageState {
  messages: IMessage[];
  loading: boolean;
  error: string | null;
};

const initState: MessageState = {
  messages: [],
  loading: false,
  error: null,
};

export const fetchMessages = createAsyncThunk('fetch/messages', async () => {
    const { data } = await axiosApiClient.get('/messages');
    return data;
});

export const createMessage = createAsyncThunk('post/messages', async (payload: FormData) => {
    const { data } = await axiosApiClient.post<IMessage>('/messages', payload);
    return data;
});

export const messageSlice = createSlice({
  name: 'messages',
  initialState: initState,
  reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMessages.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchMessages.fulfilled, (state, action) => {
            state.loading = false;
            state.messages = action.payload;
        })
        .addCase(fetchMessages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'error exception in fetchProducts';
        });
  },
});

export default messageSlice.actions;
