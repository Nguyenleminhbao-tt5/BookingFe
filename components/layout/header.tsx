import { Layout, Button } from "antd";
import {
    BedDouble,
    Plane,
    Earth,
    CarTaxiFront,
    Car,
    MapPin,
    CarFront,
    ShoppingBag,
} from "lucide-react";
import { DropdownAvatar } from "../ui/dropdown-avatar";
import Link from "next/link";
import useUser from "@/stores/user-store";
import { redirect } from "next/navigation";

const { Header } = Layout;

const HeaderDf = () => {
    const { user } = useUser();

    return (
        <Header className="flex items-start px-80 bg-[#003B95] h-32 flex-col justify-around ">
            <div className="flex justify-between items-center w-full ">
                <Link href="/" className=" text-3xl font-semibold text-white">
                    Booking.com
                </Link>
                {user.id == "" ? (
                    <section className="flex justify-between gap-2 items-center font-medium">
                        <Button className="bg-white" href="/signup">
                            Đăng kí
                        </Button>
                        <Button className="bg-white" href="/login">
                            Đăng nhập
                        </Button>
                    </section>
                ) : (
                    <section className="flex justify-between gap-2 items-center">
                        <Link
                            href="/mybooking"
                            className="flex justify-center items-center p-2 border-white border-[1px]"
                        >
                            <ShoppingBag className="text-white" />
                            <span className=" font-semibold text-lg ml-2 text-white">
                                My Booking
                            </span>
                        </Link>
                        <DropdownAvatar />
                    </section>
                )}
            </div>
            <nav className="w-full flex justify-between text-white h-[45px] text-md">
                <button className="flex items-center space-x-2 border-[1px] border-white rounded-3xl px-2 bg-[#1A4FA0]">
                    <BedDouble />
                    <span>Lưu trú</span>
                </button>
                <button className="flex items-center space-x-2  rounded-3xl px-2 hover:bg-[#1A4FA0]">
                    <Plane />
                    <span>Chuyến bay</span>
                </button>
                <button className="flex items-center space-x-2  rounded-3xl px-2 hover:bg-[#1A4FA0]">
                    <Earth />
                    <span>Chuyến bay + Khách sạn</span>
                </button>
                <button className="flex items-center space-x-2  rounded-3xl px-2 hover:bg-[#1A4FA0]">
                    <CarTaxiFront />
                    <span>Thuê xe</span>
                </button>
                <button className="flex items-center space-x-2  rounded-3xl px-2 hover:bg-[#1A4FA0]">
                    <MapPin />
                    <span>Địa điểm tham quan</span>
                </button>

                <button className="flex items-center space-x-2  rounded-3xl px-2  hover:bg-[#1A4FA0]">
                    <CarFront />
                    <span>Taxi sân bay</span>
                </button>
            </nav>
        </Header>
    );
};

export default HeaderDf;
