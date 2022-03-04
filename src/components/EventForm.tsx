import { Form,Select,DatePicker,Input,Button } from 'antd';
import { Moment } from 'moment';
import React,{FC, useState} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../model/IEvent';
import { IUser } from '../model/IUser';
import { formatDate } from '../utils/date';
import { Rules } from '../utils/rules';
const {log}=console
interface EventFormProps{
    guests:IUser[],
    submit:(event:IEvent)=>void
}
const EventForm:FC<EventFormProps> = ({guests,submit}) => {
    const [event,setEvent]=useState<IEvent>(
          {   author:"",
              guest:"",
              date:"",
              description:""
            } as IEvent
    )
    const {user}=useTypedSelector(state=>state.auth)
    log(guests)
    const submitForm=()=>{
        submit({...event,author:user.username})
    }
    const selectDate=(date:Moment | null)=>{
        if(date){
            setEvent({...event,date:formatDate(date.toDate())})
        }
    }
    return (
        <Form onFinish={submitForm}>
           < Form.Item
           label={"Select guest"}
           rules={[Rules.required("Select guest")]}
           >
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={(guest:string)=>setEvent({...event,guest})}>
             {guests.map(
               guest=>(
                <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>
               )
             )}
    
    </Select>
           </Form.Item>
           <Form.Item
                  label={"Event Date"} 
                  name={"date"}
                  rules={[Rules.isDateAfter("Yo cant select that date")]}
           >
               <DatePicker
               onChange={(date:Moment | null)=>selectDate(date)}
               />
           </Form.Item>
           <Form.Item
           label={"Description"}
           name={"description"}
           rules={[Rules.required("Select description")]}
           >
               <Input value={event.description} onChange={(ev)=>setEvent({...event,description:ev.target.value})}/>
           </Form.Item>
           <Form.Item>
           <Button type="primary" htmlType="submit" >
         Create event
        </Button>
           </Form.Item>
        </Form>
    );
};

export default EventForm;