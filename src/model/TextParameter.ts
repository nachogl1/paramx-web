import { ParamUser } from "./ParamUser";

export interface TextParameter {
    id: string;
    date: Date;
    valueParameter: string;
    name: string;
    paramUser: ParamUser;
}