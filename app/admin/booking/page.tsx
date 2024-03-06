"use client";

import BookingService from "@/services/api/booking-api";
import { useEffect, useState } from "react";
import { TableAdmin, columnBooking } from "../_components/table-admin";
import { ColumnsType } from "antd/es/table";
import { Result, Skeleton } from "antd";
import { BookingType } from "../type/booking.datatype";
import { IBooking } from "@/interfaces/booking.interface";
import useUser from "@/stores/user-store";
import Link from "next/link";

const BookingAdmin = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [bookings, setBooking] = useState<BookingType[]>([]);
    const { user } = useUser();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await BookingService.getAllBookings();
            if (response && response.type == "Success") {
                const convertBookings = response.data.map((ele: IBooking) => {
                    return {
                        id: ele?.id,
                        user_name:
                            ele?.user?.first_name + " " + ele?.user?.last_name,
                        time_book: ele?.start_book + " to " + ele?.end_book,
                        time_picker: ele?.time_picker,
                        address: ele?.address,
                        business_name: ele?.business?.name,
                        is_pending: ele?.is_pending,
                    };
                });
                setBooking(convertBookings);
            }
        };
        fetchData();
        setLoading(false);
    }, []);

    return (
        <>
            {user.is_admin ? (
                <div className="px-6 w-full rounded-xl bg-white shadow-xl min-h-screen ">
                    <h1 className="text-black py-5 text-4xl font-semibold">
                        Quản lý Booking
                    </h1>
                    {isLoading ? (
                        <Skeleton className="w-full" />
                    ) : (
                        <TableAdmin
                            typeColumn={
                                columnBooking as ColumnsType<BookingType>
                            }
                            dataSource={bookings}
                        />
                    )}
                </div>
            ) : (
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={
                        <Link
                            href="/"
                            type="primary"
                            className=" bg-blue-500 p-3 rounded-xl"
                        >
                            Back Home
                        </Link>
                    }
                />
            )}
        </>
    );
};

export default BookingAdmin;
