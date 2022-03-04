import { Calendar } from 'antd';
import { Moment } from 'moment';
import React,{FC} from 'react';
import { IEvent } from '../model/IEvent';
import { formatDate } from '../utils/date';
interface EventCalendarProps{
    events:IEvent[]
}
const EventCalendar:FC<EventCalendarProps> = ({events}) => {
    console.log(events)
   const dateCellRender=(value:Moment)=>{
   const formatedDate=formatDate(value.toDate())
   const listData = events.filter(ev=>ev.date===formatedDate)
return (
<div>
{listData.map((event,index)=>(
    <div key={index} onClick={()=>console.log(event.author)}>
{event.description}
    </div>
))}
         </div>
)
   }
    return (
        <Calendar
        dateCellRender={dateCellRender}
        />
    )
};

export default EventCalendar;