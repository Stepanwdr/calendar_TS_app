import { IEvent } from './../../../model/IEvent';
import { IUser } from './../../../model/IUser';
export interface EventState{
    guests:IUser[],
    events:IEvent[]
}

export enum EventActionEnum{
SET_EVENTS="SET_EVENTS",
SET_GUESTS="SET_GUESTS"
}

export interface setGuests{
    type:EventActionEnum.SET_GUESTS,
    payload:IUser[]
}

export interface setEvents{
    type:EventActionEnum.SET_EVENTS,
    payload:IEvent[]
}


export type EventAction=setGuests | setEvents