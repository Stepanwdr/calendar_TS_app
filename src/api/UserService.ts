import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import { IUser } from "../model/IUser";
import Storage from "../helpers/Storage"
const api = axios.create({
 baseURL: "http://localhost:4000",
});

api.interceptors.request.use((config) => {
 const c = config;
 const token = Storage.getToken();
 if (token) {
  //c.headers.authorization = token;
  console.log("token")
 }
 return c;
}, Promise.reject);
 export default class UserServices{
static async getUsers():Promise<AxiosResponse<IUser[]>>{
return await api.get<IUser[]>("/users/users")
}
  static async login(password:string,email:string):Promise<AxiosResponse<IUser>>{
   return await api.get<IUser>("users/login",{
    params:{
     password,
     email
    }
   })
  }
}
