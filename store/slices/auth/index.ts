import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@/store/store'
import { config } from '@/utils/config'
import { Api } from '@/utils/Apis'
import axios from 'axios'

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
        }

    }
})


export const { loginUserStart, loginUserSuccess, loginUserFailure, logoutUser, singUpStart, signUpSuccess, signUpFailure } = AuthSlice.actions;

export default AuthSlice.reducer


export const loginUser = (credentials: any): AppThunk => async (dispatch) => {
    dispatch(loginUserStart());
    try {
        console.log(config.SERVERURL + Api.LOGIN_API)
        const response = await fetch(config.SERVERURL + Api.LOGIN_API, {
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
        dispatch(loginUserSuccess(data));
    } catch (error) {
        console.error('Login failed:', error);
        dispatch(loginUserFailure());
    }
};


export const SignUpUser = (credentials: any): AppThunk => async (dsipatch) => {
    dsipatch(singUpStart())
    try {
        const response = await axios.post(config.SERVERURL + Api.SINGUP_API, credentials, {
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