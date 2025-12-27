import { createSlice } from '@reduxjs/toolkit'
import { fetchNews } from './api.thunks'
import type { News, User } from './api.types'

interface ApiState {
    news: News[]
    users: User[]
    loading: boolean
    error?: string
}

const initialState: ApiState = {
    news: [],
    users: [],
    loading: false,
}

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.news = action.payload.news
                state.users = action.payload.users
                state.loading = false
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export default apiSlice.reducer
