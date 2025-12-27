import type { RootState } from '@/app/store'

export const selectNews = (state: RootState) => state.api.news

export const selectUsers = (state: RootState) => state.api.users

export const selectApiLoading = (state: RootState) => state.api.loading

export const selectApiError = (state: RootState) => state.api.error

export const selectNewsWithReporters = (state: RootState) =>
    state.api.news.map(news => ({
        ...news,
        reporter: news.reporterName,
    }))
