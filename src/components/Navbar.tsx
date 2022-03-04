import {Layout,Row,Menu }from 'antd';

import React,{FC} from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar:FC = () => {
    const {logout}=useActions()
    const {user,isAuth}=useTypedSelector(state=>state.auth)
    if(isAuth){
return(
    <Layout.Header>
    <Row justify='end'>
        <div style={{color:"white"}}>
        {user.username}
    </div>
<Menu theme='dark' mode='horizontal' selectable={false}>
<Menu.Item key={1}  onClick={()=>logout()}>
LogOut
</Menu.Item>   
</Menu>
    </Row>
</Layout.Header>
)
    }
    return (
        <Layout.Header>
            <Row justify='end'>
<Menu theme='dark' mode='horizontal' selectable={false}>
<Menu.Item key={1}>
Login
</Menu.Item>   
</Menu>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;