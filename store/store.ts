import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slices/auth';

export const store = configureStore({
    reducer: {
        auth: AuthSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;