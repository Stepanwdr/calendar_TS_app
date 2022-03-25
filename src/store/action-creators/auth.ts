
import { AuthActionEnum, SetUserAction, SetIsAuthAction, SetIsLoadingAction, SetErrorAction } from './../reducers/auth/types';
import { IUser } from "../../model/IUser";
import { AppDispatch } from '../../store/index';
import UserServices from '../../api/UserService';
export const AuthActionCreators={
setUser:(user:IUser):SetUserAction=>({type:AuthActionEnum.SET_USER,payload:user}),
setAuth:(isAuth:boolean):SetIsAuthAction=>({type:AuthActionEnum.SET_IS_AUTH,payload:isAuth}),
setIsLoading:(isLoading:boolean):SetIsLoadingAction=>({type:AuthActionEnum.SET_IS_LOADING,payload:isLoading}),
setError:(error:string):SetErrorAction=>({type:AuthActionEnum.SET_ERROR,payload:error}),
login:(password:string,email:string)=>async(dispatch:AppDispatch)=>{
dispatch(AuthActionCreators.setIsLoading(true))
 setTimeout (async()=>{
    try{
        const response=await UserServices.login(password,email)
        console.log(response.data);
        if(response.data){
            localStorage.setItem("isAuth","true")
            localStorage.setItem("username",response.data.username)
             dispatch(AuthActionCreators.setAuth(true))
             dispatch(AuthActionCreators.setUser(response.data))
        }
        dispatch(AuthActionCreators.setIsLoading(false))
    }
        catch(e){
           dispatch(AuthActionCreators.setError("Request error"))
        }
},5000)
},
logout:()=>(dispatch:AppDispatch)=>{
localStorage.removeItem("isAuth")
localStorage.removeItem("username")
dispatch(AuthActionCreators.setAuth(false))
dispatch(AuthActionCreators.setIsLoading(false))
}
}