import { AuthActionEnum, type SetErrorAction, type SetIsAuthAction, type SetIsLoadingAction, type SetUserAction } from "./types";
import { UserService } from "../../../API/UserService";
import type { AppDispatch } from "../..";
import type { IUser } from "../../../models/types";

export const authActionCreator ={
    setIsAuth: (isAuth: boolean): SetIsAuthAction => ({type: AuthActionEnum.SET_IS_AUTH, payload: isAuth}),
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
    setError:  (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error }),
    login: (username: string, password: string) => async (dispatch: AppDispatch ) => {
        try {
            dispatch(authActionCreator.setIsLoading(true))
            dispatch(authActionCreator.setError(''));
            const response = await UserService.getUsers()
            const MochUser = response.data.find(u => u.username === username && u.password === password)
            if (MochUser) {
                localStorage.setItem('auth', 'true')
                localStorage.setItem('user', MochUser.username)
                dispatch(authActionCreator.setIsAuth(true))
                dispatch(authActionCreator.setUser(MochUser))
            } else {
                dispatch(authActionCreator.setError(' Неверное имя пользователя или пароль'))
            }    
        } catch (error) {
            dispatch(authActionCreator.setError('Произошла ошибка при входе в систему'))
            console.log(error)
        } finally {
            dispatch(authActionCreator.setIsLoading(false))
        }
    },
    logout: () => async (dispatch: AppDispatch ) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('user')
        dispatch(authActionCreator.setIsAuth(false))
        dispatch(authActionCreator.setUser({} as IUser))         
    }
}