import { Layout,Row } from 'antd';
import React,{FC} from 'react';
import LoginForm from '../components/LoginForm';

const Login:FC = () => {
    return (
        <Layout>
            <Row className='h100' align='middle' justify='center'>
              <LoginForm/>   
            </Row>
        </Layout>
    );
};
export default Login