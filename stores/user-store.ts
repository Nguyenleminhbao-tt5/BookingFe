import { IUser } from "@/interfaces/user.interface";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
    user: IUser;
    setUser: (user: IUser) => void;
};

const initialState = {
    id: "",
    first_name: "",
    last_name: "",
    email:"",
    avatar: "",
    accessToken: "",
    is_admin: false,
};

const useUser = create<Store>()(
    persist(
        (set, get) => ({
            user: initialState,
            setUser: (newUser) =>
                set({
                    user: newUser,
                }),
        }),
        {
            name: "storage-user",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useUser;
