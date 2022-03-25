import React,{FC} from 'react';
import {Rules} from "../utils/rules"
import {Form,Input,Button} from "antd";
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm:FC = () => {
   const {login}=useActions()
  const {isLoading}=useTypedSelector(state=>state.auth)
    const handleSubmit=()=>{
     login("add56b5212e81abc4432624a8e6049aa","st@mail.rus")
    }
    return (
        <Form onFinish={handleSubmit}>
           <Form.Item
           label={"Username"}
           name={"username"}
           rules={[Rules.required("Complete username")]}
           >
              <Input/>
           </Form.Item>
           <Form.Item
           label={"Password"}
           name={"password"}
           rules={[Rules.required("Complete password")]}
           >
           <Input.Password/>
           </Form.Item>
           <Form.Item
           >
             <Button type='primary' htmlType="submit" loading={isLoading}>Login</Button>
           </Form.Item>
        </Form>
    );
};

export default LoginForm;