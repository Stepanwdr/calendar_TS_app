
import { AuthActionEnum, SetUserAction, SetIsAuthAction, SetIsLoadingAction, SetErrorAction } from './../reducers/auth/types';
import { IUser } from "../../model/IUser";
import { AppDispatch } from '../../store/index';
import UserServices from '../../api/UserService';
export const AuthActionCreators={
setUser:(user:IUser):SetUserAction=>({type:AuthActionEnum.SET_USER,payload:user}),
setAuth:(isAuth:boolean):SetIsAuthAction=>({type:AuthActionEnum.SET_IS_AUTH,payload:isAuth}),
setIsLoading:(isLoading:boolean):SetIsLoadingAction=>({type:AuthActionEnum.SET_IS_LOADING,payload:isLoading}),
setError:(error:string):SetErrorAction=>({type:AuthActionEnum.SET_ERROR,payload:error}),
login:(username:string,password:string)=>async(dispatch:AppDispatch)=>{
dispatch(AuthActionCreators.setIsLoading(true))
 setTimeout (async()=>{
    try{
        const response=await UserServices.getUsers()
        console.log(response.data);
        const user=response.data.find(user=>user.username===username && user.password===password)
        if(user){
            localStorage.setItem("isAuth","true")
            localStorage.setItem("username",user.username)
             dispatch(AuthActionCreators.setAuth(true))
             dispatch(AuthActionCreators.setUser(user))
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