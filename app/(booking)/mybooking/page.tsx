"use client";

import useBooking from "@/stores/booking-store";
import { CardBooking } from "../_components/card-booking";
import { Skeleton } from "antd";
import { IBooking } from "@/interfaces/booking.interface";

const MyBooking = () => {
    const { bookings } = useBooking();
    return (
        <div className="px-80 my-10">
            <h1 className=" font-bold text-black text-2xl">
                Các booking bạn đặt !
            </h1>
            <section className="mt-10 grid grid-cols-3 gap-3">
                {bookings.length == 0 ? (
                    <h1 className="text-lg">No booking</h1>
                ) : (
                    bookings.map((booking: IBooking, index: number) => {
                        return (
                            <CardBooking
                                key={index}
                                id={booking.id as string}
                                province={booking.address}
                                start_book={booking.start_book}
                                end_book={booking.end_book}
                            />
                        );
                    })
                )}
            </section>
        </div>
    );
};

export default MyBooking;
