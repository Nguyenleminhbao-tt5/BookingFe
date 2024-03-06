import React from "react";
import { LoginForm } from "../_components/login-form";
import { BookingThumb } from "../_components/booking-thumb";

const Login = () => {
    return (
        <div className="text-black w-full bg-gray-100 h-screen grid  grid-cols-5 lg:gap-3  items-center justify-center p-6 ">
            <BookingThumb />
            <section className="lg:col-span-2 col-span-5 flex justify-center items-center">
                <LoginForm />
            </section>
        </div>
    );
};

export default Login;
