import type { ReactNode } from "react";

export interface IRoute {
    path: string,
    element: ReactNode
}

export interface IUser {
    username: string,
    password: string
}

export interface IEvent {
    id: number,
    author: string,
    guest: string,
    date: string,
    description: string
}