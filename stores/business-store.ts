import { IBusiness } from "@/interfaces/business.interface";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
    business_list: IBusiness[],
    setBusiness: (business: IBusiness[]) =>void,
};

const initialState = {
    business_list: []
};

const useBusiness = create<Store>()(
    persist(
        (set, get) => ({
            business_list: initialState.business_list,
            setBusiness: (newBusiness) =>
                set((state)=>({
                    business_list: newBusiness
                }))
        }),
        {
            name: "storage-business",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useBusiness;
