import { ParamUser } from "../model/ParamUser";
import { httpRequest } from "./httpClient";

export const fetchUsers = async (): Promise<ParamUser[]> => {
    return httpRequest<ParamUser[]>("users", "GET");
};
