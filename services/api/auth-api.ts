import { IUser } from "@/interfaces/user.interface";
import CallAPI from "./call-api";

const authRoutes = {
    login: '/api/v1/auth/login',
    signup: '/api/v1/auth/sign-up',
}

export default class AuthService {
    static login = async(email: string, password: string)=>{
        try{
            let config: Object = {
                data: { email, password },
              };
            const response = await CallAPI.call(authRoutes.login,{
                method:'POST',
                ...config
            })
            return response
        }
        catch(err){
            throw err;
        }
    }

    static signUp = async ({ first_name, last_name, email, password }: IUser) => {
        try {
            const config = {
                data: { first_name, last_name, email, password},
              };
            let response = await CallAPI.call(authRoutes.signup, {
                method: "POST",
                ...config,
            });
            return response;
        } 
        catch (error) {
            throw error;
        }
        };

    
}