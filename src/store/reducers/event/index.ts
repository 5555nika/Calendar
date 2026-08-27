import { EventActionEnum, type EventAction, type EventState } from "./types"

export const initialState: EventState= {
    events: [],
    guests: []
}

export default function eventReducer (state: EventState = initialState, action: EventAction): EventState {
    switch (action.type) {
        case EventActionEnum.SET_EVENTS:
            return ({...state, events: action.payload })

        case EventActionEnum.SET_GUESTS:
            return ({...state, guests: action.payload })
            
        default:
            return state;
    }
}