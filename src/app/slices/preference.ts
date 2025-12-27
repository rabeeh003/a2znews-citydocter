import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Theme = "dark" | "light" | "system"

export interface PreferenceState {
    theme: Theme
    language: string
}

const initialState: PreferenceState = {
    theme: 'light',
    language: 'en',
}

export const preferenceSlice = createSlice({
    name: 'preference',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
        },
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload
        },
    },
})

export const { setTheme, setLanguage } = preferenceSlice.actions

export default preferenceSlice.reducer