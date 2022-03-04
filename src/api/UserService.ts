import axios, { AxiosResponse } from "axios";
import { IUser } from "../model/IUser";
 export default class UserServices{
static async getUsers():Promise<AxiosResponse<IUser[]>>{
return await axios.get<IUser[]>("./users.json")
}
}
