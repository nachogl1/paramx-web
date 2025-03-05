import { TextParameter } from "./TextParameter";

export interface ParamUser {
    id: string;
    firstName: string;
    secondName: string;
    email: string;
    parameters: TextParameter[]
}