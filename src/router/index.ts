import Login from "../pages/Login";
import Event from "../pages/Event";
export enum RoutesNames{
    LOGIN="/login",
    EVENT="/event"
}
export interface IRoute{
    path:string,
    Element:React.ComponentType
}
export const PublicRoutes:IRoute[]=[
{path:RoutesNames.LOGIN,
Element:Login
}
]
export const PrivateRoutes:IRoute[]=[
    {
   path:RoutesNames.EVENT,
   Element:Event
    }
]