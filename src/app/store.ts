import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import preferenceReducer from './slices/preference'
import { newsApi } from './slices/api/newsApi'

const rootReducer = combineReducers({
    preference: preferenceReducer,
    [newsApi.reducerPath]: newsApi.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['preference'],
    blacklist: [newsApi.reducerPath],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,],
            },
        }).concat(newsApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
