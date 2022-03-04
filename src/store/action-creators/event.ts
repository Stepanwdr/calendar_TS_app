import { IEvent } from './../../model/IEvent';
import { IUser } from './../../model/IUser';
import { setGuests, EventActionEnum, setEvents } from './../reducers/event/type';
import UserServices from '../../api/UserService';
import { AppDispatch } from './../index';
export const EventActionCreators={ 
    setGuests:(guests:IUser[]):setGuests=>({type:EventActionEnum.SET_GUESTS,payload:guests}),
    setEvents:(events:IEvent[]):setEvents=>({type:EventActionEnum.SET_EVENTS,payload:events}),
    fetchGuests:()=>async(dispatch:AppDispatch)=>{
    const response=await UserServices.getUsers()
    dispatch(EventActionCreators.setGuests(response.data))
try{
 
}catch(e){
console.log(e)
}
},
createEvent:(event:IEvent)=>async(dispatch:AppDispatch)=>{
    try{
const events=localStorage.getItem("events" ) || "[]"
const json=JSON.parse(events) as IEvent[]
 dispatch(EventActionCreators.setEvents(json))
json.push(event)
localStorage.setItem("events",JSON.stringify(json))
    }catch(e){
        console.log(e)
    }
},
fetchEvents:(username:string)=>async(dispatch:AppDispatch)=>{
try{
const events=await localStorage.getItem("events") || "[]"
const json=JSON.parse(events) as IEvent[]
const currentUserEvents=json.filter(event=>event.author===username)
dispatch(EventActionCreators.setEvents(currentUserEvents))
}catch{
    
}
}
}