import React from "react";
import { SignUpForm } from "../_components/signup-form";

const SignUp = () => {
    return (
        <div className=" w-full bg-gray-100 h-screen flex items-center justify-center p-6 overflow-y-scroll scrollbar-hide">
            <SignUpForm />
        </div>
    );
};

export default SignUp;
