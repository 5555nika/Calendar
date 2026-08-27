import type { IEvent, IUser } from "../../../models/types"


export interface EventState {
    events: IEvent[],
    guests: IUser[]
}

export const EventActionEnum = {
    SET_EVENTS: 'SET_EVENTS',
    SET_GUESTS: 'SET_GUESTS',   
} as const

export interface SetEventsAction {
    type: typeof EventActionEnum.SET_EVENTS
    payload: IEvent[]
}
export interface SetGuestsAction {
    type: typeof EventActionEnum.SET_GUESTS
    payload: IUser[]
}

export type EventAction = 
    SetEventsAction |
    SetGuestsAction
