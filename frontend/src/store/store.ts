import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './modules/reducer';

export const store = configureStore({
    reducer: rootReducers,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducers>;