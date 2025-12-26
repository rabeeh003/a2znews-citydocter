import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PreferenceState {
    theme: string
    language: string
}

const initialState: PreferenceState = {
    theme: 'dark',
    language: 'en',
}

export const preferenceSlice = createSlice({
    name: 'preference',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload
        },
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload
        },
    },
})

export const { setTheme, setLanguage } = preferenceSlice.actions

export default preferenceSlice.reducer