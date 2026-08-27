import { Login } from "./pages/Login";
import { Event } from "./pages/Event";
import type { IRoute } from "./models/types";


export const RouteNames = {
    EVENTS: '/events',
    LOGIN: '/login'
} as const

export const privateRouter: IRoute[] = [
    {path: RouteNames.EVENTS, element: <Event /> }
]

export const publicRouter: IRoute[] = [
    {path: RouteNames.LOGIN, element: <Login /> }
]