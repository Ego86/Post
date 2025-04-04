import { atom } from "nanostores";
import { IUser } from "../types/interface";

export const $users = atom<IUser[]>([
    {
        id: 1,
        login: "admin",
        password: "password"
    }
])
export const addUser =(user: IUser) => {
    $users.set([...$users.get(), user])
}