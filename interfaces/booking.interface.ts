import { IBusiness } from "./business.interface";
import { IUser } from "./user.interface";


export interface IBooking {
    id?: string;
    start_book: string;
    end_book: string;
    num_of_humans: number;
    business_id?: string;
    address: string;
    is_pending?: boolean;
    time_picker: string;
    business?: IBusiness
    user?: IUser
}