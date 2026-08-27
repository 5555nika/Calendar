import type { AppDispatch } from "../.."
import { UserService } from "../../../API/UserService"

import type { IEvent, IUser } from "../../../models/types"

import { EventActionEnum, type SetEventsAction, type SetGuestsAction } from "./types"

    const getLocalStorageLoad = (): IEvent[] => {
        try {
            const result = localStorage.getItem('events');
                if (result) {
                    const parsed = JSON.parse(result);
                    if (Array.isArray(parsed)) {
                    return parsed as IEvent[]; 
                    }
                }
        } catch (error) {
            console.error("Ошибка чтения событий из localStorage:", error);
        }
    return [];
    }


export const eventActionCreator ={
    setEvents: (events: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload: events}),
    setGuests: (guests: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload: guests}),
    fetchGuest: () => async (dispatch: AppDispatch ) => {
        try {
            const response = await UserService.getUsers()
            dispatch(eventActionCreator.setGuests(response.data))
        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async  (dispatch: AppDispatch) => {
        try {
            const allEvents = getLocalStorageLoad()
            const newEvents = [...allEvents, event]
            localStorage.setItem('events', JSON.stringify(newEvents));
            dispatch(eventActionCreator.setEvents(newEvents))
        } catch (error) {
            console.log('Ошибка при создании события', error)
        }
    },
    eventFilter: (username: string) => async  (dispatch: AppDispatch) => {
        try {
            const allEvents = getLocalStorageLoad()
            const currentUser = allEvents.filter(u => u.author === username || u.guest === username)
            dispatch(eventActionCreator.setEvents(currentUser))
        } catch (error) {
            console.log('Ошибка при загрузки событий', error)
        }
    }
}
