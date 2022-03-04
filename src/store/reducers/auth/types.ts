import { IUser } from './../../../model/IUser';
export interface AuthState{
   isAuth:boolean,
   isLoading:boolean,
   user:IUser,
   error:null | string
}
export enum AuthActionEnum{
SET_IS_AUTH="SET_IS_AUTH",
SET_IS_LOADING="SET_IS_LOADING",
SET_ERROR="SET_ERROR",
SET_USER="SET_USER"
}
export interface SetIsAuthAction{
    type:AuthActionEnum.SET_IS_AUTH,
    payload:boolean
}
export interface SetIsLoadingAction{
type:AuthActionEnum.SET_IS_LOADING,
payload:boolean
}
export interface SetErrorAction{
    type:AuthActionEnum.SET_ERROR,
    payload:string
}
export interface SetUserAction{
    type:AuthActionEnum.SET_USER,
    payload:IUser
}
export type AuthAction=SetIsAuthAction|
SetIsLoadingAction|
SetErrorAction|
SetUserAction