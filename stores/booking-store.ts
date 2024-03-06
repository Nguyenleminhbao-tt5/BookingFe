import { IBooking } from "@/interfaces/booking.interface";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
    bookings: IBooking[];
    setBooking: (booking: IBooking) => void;
    addBooking: (booking: IBooking) => void;
    removeBooking: (id: string) => void;
};

const initialState = {
   bookings: []
};

const useBooking = create<Store>()(
    persist(
        (set, get) => ({
            bookings: initialState.bookings,
            setBooking: (newBooking) =>
                set((state)=>({
                    bookings: state.bookings.concat(newBooking)
                })),
            addBooking: (newBooking)=>set((state)=>({
                bookings: state.bookings.concat(newBooking)
            })),
            removeBooking: (id)=>set((state)=>({
                bookings: state.bookings.filter(booking=>booking.id != id)
            }))
        }),
        {
            name: "storage-booking",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useBooking;
