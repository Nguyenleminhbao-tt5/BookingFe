import Image from "next/image";

export const BookingThumb = () => {
    return (
        <div className=" lg:col-span-3  hidden  lg:flex justify-center flex-col items-center">
            <Image
                src={"/thumb/booking.jpeg"}
                width={300}
                height={100}
                alt="Booking Logo"
                className="-ml-7 py-4 w-4/5 rounded-md"
            />
            <p className=" text-2xl ld:text-3xl font-semibold">
                Booking giúp bạn có nhiều nghiệm tốt hơn
            </p>
        </div>
    );
};
