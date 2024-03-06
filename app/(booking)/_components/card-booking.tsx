"use client";

import BookingService from "@/services/api/booking-api";
import useBooking from "@/stores/booking-store";
import { Avatar, Button, Card } from "antd";
import { XCircle } from "lucide-react";

const { Meta } = Card;

type Props = {
    id: string;
    province: string;
    start_book: string;
    end_book: string;
};

export const CardBooking = ({ id, province, start_book, end_book }: Props) => {
    const { bookings, removeBooking } = useBooking();

    const handleDeltete = async () => {
        const response = await BookingService.deleteBooking(id);
        if (response && response.type == "Success") {
            removeBooking(id);
        }
    };
    return (
        <Card
            cover={
                <img
                    className="bg-cover"
                    alt="example"
                    src="https://nplaw.vn/upload/images/thuong-mai/hinh-anh-1(7).jpeg"
                />
            }
            className="w-full shadow-xl relative"
        >
            <Meta
                avatar={
                    <Avatar src="https://uploads.nhanhoa.com/news/no-avatar.png" />
                }
                title={province}
                description={`Range book: ${start_book} to ${end_book}`}
            />
            <Button
                shape="circle"
                className="absolute top-2 right-2 bg-red-400 flex justify-center items-center"
                onClick={handleDeltete}
            >
                <XCircle />
            </Button>
        </Card>
    );
};
