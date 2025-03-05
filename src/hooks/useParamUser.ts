import { useState, useEffect } from "react";
import { ParamUser } from "../model/ParamUser";

export function useParamUser() {
    const [paramUser, setParamUser] = useState<ParamUser | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("paramUser");
        if (storedUser) {
            setParamUser(JSON.parse(storedUser) as ParamUser);
        }
    }, []);

   

    return { paramUser };
}
