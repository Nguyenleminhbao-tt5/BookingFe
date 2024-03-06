"use client";

import { Carousel, Button } from "antd";
import { useEffect, useState } from "react";
import { BookingType, CreateBookingForm } from "./create-booking-form";
import { transferDate } from "@/utils/transfer-time";
import useUser from "@/stores/user-store";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import useBooking from "@/stores/booking-store";
import BookingService from "@/services/api/booking-api";
import useBusiness from "@/stores/business-store";

export const CarouselImage = () => {
    const router = useRouter();
    const { user } = useUser();
    const [open, setOpen] = useState(false);
    const { addBooking } = useBooking();
    const { business_list, setBusiness } = useBusiness();

    const onCreate = async (values: BookingType) => {
        const { address, range_book, time_picker, num_of_humans, business_id } =
            values;
        const start_book = transferDate(new Date(range_book[0].$d));
        const end_book = transferDate(new Date(range_book[1].$d));

        console.log(
            start_book,
            end_book,
            address,
            business_id,
            time_picker,
            num_of_humans
        );

        const response = await BookingService.createBooking({
            start_book,
            end_book,
            address,
            business_id,
            time_picker,
            num_of_humans,
        });

        if (response && response.type == "Success") {
            addBooking(response.data);
            router.push("/mybooking");
        }
        setOpen(false);
    };

    const handleCheckUser = () => {
        if (user.id == "") {
            console.log("alo");
            router.push("/login");
        } else setOpen(true);
    };

    useEffect(() => {
        const fecthData = async () => {
            if (user?.id && business_list.length == 0) {
                const responseListBusiness =
                    await BookingService.getAllBusiness();
                if (
                    responseListBusiness &&
                    responseListBusiness.type == "Success"
                ) {
                    setBusiness(responseListBusiness.data);
                }
            }
        };
        fecthData();
    }, []);
    return (
        <section className="relative bg-gradient-to-r from-black to-transparent">
            <Carousel
                autoplay
                className="w-full h-[430px]"
                autoplaySpeed={2500}
            >
                <div className="w-full  h-[430px] ">
                    <img
                        src="https://r-xx.bstatic.com/xdata/images/xphoto/2880x868/313564245.jpeg?k=c677d4c63f8a8218d275614559b8ccd5dc5f169b44667c3ff46328091c225b13&o="
                        className="w-full h-full bg-cover"
                    />
                </div>
                <div className="w-full  h-[430px]">
                    <img
                        src="https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-cover.jpeg"
                        className="w-full h-full bg-cover"
                    />
                </div>
                <div className="w-full  h-[430px]">
                    <img
                        src="https://www.seaplanes.vn/blog/wp-content/uploads/2017/05/hanoi-full-day-city-tour.jpg"
                        className="w-full h-full bg-cover"
                    />
                </div>
                <div className="w-full  h-[430px]">
                    <img
                        src="https://mia.vn/media/uploads/blog-du-lich/chi-phi-du-lich-ha-giang-tu-tuc-danh-cho-1-nguoi-01-1642920538.jpeg"
                        className="w-full h-full bg-cover"
                    />
                </div>
            </Carousel>
            <div className=" absolute top-3 left-80 flex flex-col justify-center items-start  h-full">
                <h1 className=" text-5xl font-bold  text-white text-left w-1/2 leading-snug">
                    Chỗ nghỉ trong mơ cho chuyến đi hằng mong ước
                </h1>
                <h3 className=" text-2xl font-medium text-white text-left w-1/2 leading-snug">
                    Tạo nên chuyến đi đáng nhớ khi lưu trú tại nhà nghỉ dưỡng
                </h3>
                <div
                    onClick={handleCheckUser}
                    className=" bg-blue-700 font-semibold text-xl border-none text-white mt-4 p-2 rounded-lg hover:brightness-75 cursor-pointer"
                >
                    Booking ngay
                </div>
            </div>
            <CreateBookingForm
                open={open}
                onCreate={onCreate}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </section>
    );
};
