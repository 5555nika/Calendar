import type { IUser } from "../../../models/types"


export interface AuthState {
    isAuth: boolean,
    user: IUser,
    isLoading: boolean,
    error: string
}

export const AuthActionEnum = {
    SET_IS_AUTH: 'SET_IS_AUTH',
    SET_USER: 'SET_USER',
    SET_IS_LOADING: 'SET_IS_LOADING',
    SET_ERROR: 'SET_ERROR'
} as const

export interface SetIsAuthAction {
    type: typeof AuthActionEnum.SET_IS_AUTH
    payload: boolean
}
export interface SetUserAction {
    type: typeof AuthActionEnum.SET_USER
    payload: IUser
}
export interface SetIsLoadingAction {
    type: typeof AuthActionEnum.SET_IS_LOADING
    payload: boolean
}
export interface SetErrorAction {
    type: typeof AuthActionEnum.SET_ERROR
    payload: string
}

export type AuthAction = 
    SetIsAuthAction |
    SetIsLoadingAction |
    SetUserAction |
    SetErrorAction
