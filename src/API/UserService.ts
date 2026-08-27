import type { AxiosResponse } from "axios";

import axios from "axios";
import type { IUser } from "../models/types";

export class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>(`${import.meta.env.BASE_URL}users.json`);
    }

}