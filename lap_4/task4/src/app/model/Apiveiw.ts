import { Itodo } from "./todo";


export class APIResponse{
    Data!:Itodo[];
    Message="";
    Success=true;
    IsAuthorized=true
}