import { Calendar } from 'antd';
import moment, { Moment } from 'moment';
import React,{FC} from 'react';
import { IEvent } from '../model/IEvent';
import { formatDate } from '../utils/date';
interface EventCalendarProps{
    events:IEvent[]
    setModalVisible:()=>void
}
const EventCalendar:FC<EventCalendarProps> = ({events,setModalVisible}) => {
     const dateCellRender=(value:Moment)=>{
   const formatedDate=formatDate(value.toDate())
   const listData = events.filter(ev=>ev.date===formatedDate)
return (
<div>
{listData.map((event,index)=>(
    <div key={index}>
{event.description}
    </div>
))}
         </div>
)
   }
   const handleSelect=(date:Moment)=>{
    const formatedDate=formatDate(date.toDate())
    setModalVisible()
}
    return (
        <Calendar
        dateCellRender={dateCellRender}
        onSelect={(date:Moment)=>handleSelect(date)}
        />
    )
};

export default EventCalendar;