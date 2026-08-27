import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRouter, publicRouter, RouteNames } from '../routes'
import { useTypeSelector } from '../hooks/useTypeSelector'

export const AppRouter = () => {

    const { isAuth } = useTypeSelector(state => state.auth)

    return (
        <Routes>
            {isAuth 
            ? privateRouter.map(route =>
                <Route key={route.path} path={route.path} element={route.element} /> )

            : publicRouter.map(route =>
                <Route key={route.path} path={route.path} element={route.element} /> )
            }

            <Route  path="*" element={<Navigate to={isAuth ? RouteNames.EVENTS : RouteNames.LOGIN} />} /> 
            
        </Routes>
    )
}