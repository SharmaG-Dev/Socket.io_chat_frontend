import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@/store/store'
import { Api } from '@/utils/Apis'
import config from '@/config/config'
import axios from 'axios'
import instance from '@/utils/_utils'

interface InitialStateProps {
    isLoading: boolean,
    isError: boolean,
    data: any[],
    isSuccess: boolean
    isAuthenticate: boolean
}

const initialState: InitialStateProps = {
    isLoading: false,
    isError: false,
    isAuthenticate: false,
    isSuccess: false,
    data: []
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        loginUserStart(state) {
            state.isLoading = true;
            state.isError = false;
        },
        loginUserSuccess(state, action: PayloadAction<any[]>) {
            state.isLoading = false;
            state.isAuthenticate = true;
            state.data = action.payload;
        },
        loginUserFailure(state) {
            state.isLoading = false;
            state.isError = true;
        },
        logoutUser(state) {
            state.isAuthenticate = false,
                state.data = [],
                state.isLoading = false,
                state.isError = false
            window.localStorage.removeItem(config?.TOKEN_KEY ?? "")
        },
        singUpStart(state) {
            state.isLoading = true
            state.isError = false
        },
        signUpSuccess(state, action: PayloadAction<any[]>) {
            state.data = action.payload
            state.isSuccess = true
        },
        signUpFailure(state) {
            state.isLoading = false
            state.isError = true
        },
        findMe(state) {

        }

    }
})


export const { loginUserStart, loginUserSuccess, loginUserFailure, logoutUser, singUpStart, signUpSuccess, signUpFailure } = AuthSlice.actions;

export default AuthSlice.reducer


export const loginUser = (credentials: any): AppThunk => async (dispatch) => {
    dispatch(loginUserStart());
    try {
        console.log(config?.BASE_URL + Api.LOGIN_API)
        const response = await fetch(config?.BASE_URL + Api.LOGIN_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            throw new Error('Failed to login');
        }
        const data = await response.json();
        dispatch(loginUserSuccess(data?.user));
        if (!config?.TOKEN_KEY) throw new Error("no token key provided ")
        window.localStorage.setItem(config?.TOKEN_KEY, data?.token)
    } catch (error) {
        console.error('Login failed:', error);
        dispatch(loginUserFailure());
    }
};


export const SignUpUser = (credentials: any): AppThunk => async (dsipatch) => {
    dsipatch(singUpStart())
    try {
        const response = await axios.post(config?.BASE_URL + Api.SINGUP_API, credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST"
        })
        if (response.status === 200) {
            dsipatch(signUpSuccess(response.data.data))
        } else {
            throw new Error("failed to register")
        }
    } catch (error) {
        console.log("signup failed", error)
        dsipatch(signUpFailure())
    }
};


export const findSelfData = (): AppThunk => async (dispatch) => {
    const token = window.localStorage.getItem(config?.TOKEN_KEY ?? "")
    if (token) {
        dispatch(loginUserStart());
        try {
            const response = await instance.get(Api.ME_API)
            if (response.status === 200) {
                dispatch(loginUserSuccess(response.data.data));
            }
        } catch (error) {
            console.log(error)
            loginUserFailure()
        }
    }
}
