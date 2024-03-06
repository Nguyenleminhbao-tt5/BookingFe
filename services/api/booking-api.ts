import useUser from "@/stores/user-store";
import CallAPI from "./call-api";
import { IBooking } from "@/interfaces/booking.interface";
import { IBusiness } from "@/interfaces/business.interface";

const bookingRoutes = {
    getAllBookings: "/api/v1/booking",
    createBooking: "/api/v1/booking",
    updateBooking: "/api/v1/booking",
    deleteBooking: "/api/v1/booking",
    getAllBusiness: "/api/v1/business",
    createBusiness: "/api/v1/business",
};

let headerAuthor: object = {};

if (typeof localStorage !== "undefined") {
    let accessToken = localStorage.getItem("accessToken") as string;
    headerAuthor = { Authorization: `Bearer ${accessToken}` };
} else {
    console.log("👉️ can't use localStorage");
}

export default class BookingService {
    static getAllBookings = async () => {
        try {
            const response = await CallAPI.call(bookingRoutes.getAllBookings, {
                method: "GET",
                headers: headerAuthor,
            });
            return response;
        } catch (err) {
            throw err;
        }
    };

    static createBooking = async ({
        start_book,
        end_book,
        num_of_humans,
        address,
        time_picker,
        business_id,
    }: IBooking) => {
        try {
            const response = await CallAPI.call(bookingRoutes.createBooking, {
                method: "POST",
                headers: headerAuthor,
                data: {
                    start_book,
                    end_book,
                    num_of_humans,
                    address,
                    time_picker,
                    business_id,
                },
            });
            return response;
        } catch (err) {
            throw err;
        }
    };

    static updateBooking = async (booking_id:string,is_pending: boolean) => {
        try {
            const response = await CallAPI.call(`${bookingRoutes.updateBooking}/${booking_id}`, {
                method: "PUT",
                headers: headerAuthor,
                data: {
                    is_pending,
                },
            });
            return response;
        } catch (err) {
            throw err;
        }
    };

    static deleteBooking = async (booking_id: string) => {
        try {
            const response = await CallAPI.call(
                `${bookingRoutes.deleteBooking}/${booking_id}`,
                {
                    method: "DELETE",
                    headers: headerAuthor,
                }
            );
            return response;
        } catch (err) {
            throw err;
        }
    };

    static getAllBusiness = async () => {
        try {
            const response = await CallAPI.call(bookingRoutes.getAllBusiness, {
                method: "GET",
                headers: headerAuthor,
            });
            return response;
        } catch (err) {
            throw err;
        }
    };

    static createBusiness = async ({ name, price }: IBusiness) => {
        try {
            const response = await CallAPI.call(bookingRoutes.createBusiness, {
                method: "POST",
                headers: headerAuthor,
                data: {
                    name,
                    price,
                },
            });
            return response;
        } catch (err) {
            throw err;
        }
    };
}
