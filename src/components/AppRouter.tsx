import React,{FC} from 'react';
import { Route, Routes } from 'react-router';
import Login from '../pages/Login';
import Event from "../pages/Event";
import { PrivateRoutes, PublicRoutes } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
const AppRouter:FC = () => {
    const {isAuth}=useTypedSelector(state=>state.auth)
    if(isAuth){
return(
    <Routes>
           {
 PrivateRoutes.map(({path,Element})=>
 (
     <Route 
     key={path}
     path={path}
     element={(<Element/>)}
     />
 )
)
}
           <Route path={"*"} element={<Event/>}/>
        </Routes>
)
     }

    return (
        <Routes>
        {
 PublicRoutes.map(({path,Element})=>(
    <Route
    key={path}
    path={path}
    element={(<Element/>)}
    />
))
        }
         <Route path={"*"} element={<Login/>}/>
        </Routes>
    );
};

export default AppRouter;