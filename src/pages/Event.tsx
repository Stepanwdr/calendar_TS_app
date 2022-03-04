import { createEvent } from '@testing-library/react';
import { Layout,Row,Modal,Button } from 'antd';
import { stat } from 'fs';
import React,{FC, useEffect, useState} from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../model/IEvent';
const Event:FC = () => {
    const [visible,setVisible]=useState(false)
  const {fetchGuests,fetchEvents,createEvent}=useActions()
    const {guests,events}=useTypedSelector(state=>state.event)
   const {user}=useTypedSelector(state=>state.auth)
   const handleSubmit=(event:IEvent)=>{
        setVisible(false)
      createEvent(event)
   }
   console.log(user);
   
    useEffect(()=>{
        fetchGuests()
       fetchEvents(user.username)
    },[])
    return (
        <Layout>
            <EventCalendar events={events}/>
        <Row justify='center'>
        <Button onClick={()=>setVisible(true)}>
            Add event
        </Button>
        </Row>
        <Modal
        title={"Add event"}
        visible={visible}
        footer={null}
        onCancel={()=>setVisible(false)}
        >
        <EventForm guests={guests} submit={event=>handleSubmit(event)}/>
        </Modal>
        </Layout>
    );
};
export default Event;