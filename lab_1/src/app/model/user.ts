export interface UserLogin{
    UserName:string;
    Password:string;
}
export interface UserRegister{
    Name:string;
    UserName:string;
    Password:string
}
export class APIResponse<TTTT>{
    Data!:TTTT;
    Message="";
    Success=true;
    IsAuthorized=true
}