import { IUser } from '../../../model/IUser';
import { AuthAction, AuthState, AuthActionEnum } from './types';

const initialState:AuthState={
    user:{} as IUser,
    isAuth:false,
    isLoading:false,
    error:null
}
export default function authReducer(state=initialState,action:AuthAction):AuthState{
switch(action.type){
       case AuthActionEnum.SET_IS_AUTH:
       return{
        ...state,
        isAuth:action.payload,
        }
        case AuthActionEnum.SET_USER:
            return{
                ...state,
                user:action.payload
            }
        case AuthActionEnum.SET_IS_LOADING:
            return{
                ...state,
                isLoading:action.payload
            }
        case AuthActionEnum.SET_ERROR:
         return{
             ...state,
             error:action.payload
         }
  default:
      return state
}
}