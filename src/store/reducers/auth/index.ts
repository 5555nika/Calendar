import type { IUser } from "../../../models/types";
import { AuthActionEnum, type AuthAction, type AuthState } from "./types";

export const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: ''
}

export default function  authReducer (state: AuthState = initialState, action: AuthAction): AuthState  {
    switch (action.type) {
        case AuthActionEnum.SET_IS_AUTH:
            return ({...state, isAuth: action.payload })

        case AuthActionEnum.SET_USER:
            return ({...state, user: action.payload })

        case AuthActionEnum.SET_IS_LOADING:
            return ({...state, isLoading: action.payload })

        case AuthActionEnum.SET_ERROR:
            return ({...state, error: action.payload })
            
        default:
            return state;
    }
}