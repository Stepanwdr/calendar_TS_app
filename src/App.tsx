import {Layout} from 'antd';
import React,{FC, useEffect} from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import 'antd/dist/antd.css';
import "./App.css"
import { useActions } from './hooks/useActions';
import { IUser } from './model/IUser';
const App:FC = () => {
  const {setAuth,setUser}=useActions()
  useEffect(()=>{
try{
  if(localStorage.getItem("isAuth")){
    setAuth(true)
    setUser({username:localStorage.getItem("username") || "" } as IUser)
  }
}catch(e){
}
  },[])
  return (
    <Layout>
      <Navbar/>
<Layout.Content className='h100'>
     <AppRouter/>
</Layout.Content>
  </Layout>
  );
};

export default App;