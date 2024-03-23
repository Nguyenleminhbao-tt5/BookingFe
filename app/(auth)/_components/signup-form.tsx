"use client";

import { Button, Form, Input, Select, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loading } from "@/components/ui/loading";
import AuthService from "@/services/api/auth-api";
import useUser from "@/stores/user-store";

type RegisterType = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
};

export const SignUpForm = () => {
    const router = useRouter();
    const { setUser } = useUser();
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleSignUp = async ({
        first_name,
        last_name,
        email,
        password,
    }: RegisterType) => {
        try {
            setLoading(true);
            const response = await AuthService.signUp({
                first_name,
                last_name,
                email,
                password,
            });
            if (response && response.type == "Success") {
                setUser(response.data);
                localStorage.setItem(
                    "accessToken",
                    String(response.data.accessToken)
                );
                message.success("Sign up successfully");
                router.push("/");
            }
        } catch (err) {
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-black bg-white p-5 rounded-xl w-full lg:w-1/2 xl:w-1/4">
            <div className="w-full flex flex-col items-center justify-center pb-5">
                <strong className="text-2xl">Tạo tài khoản mới</strong>
                <span>Nhanh chóng và dễ dàng.</span>
            </div>
            <Form
                name="register"
                onFinish={handleSignUp}
                style={{ maxWidth: 600 }}
                scrollToFirstError
                className="m-auto"
            >
                <Form.Item
                    name="first_name"
                    label="Họ"
                    rules={[
                        { required: true, message: "Hãy nhập tên họ của bạn!" },
                    ]}
                >
                    <Input placeholder="Họ" />
                </Form.Item>

                <Form.Item
                    name="last_name"
                    label="Tên"
                    rules={[
                        { required: true, message: "Hãy nhập tên của bạn!" },
                    ]}
                >
                    <Input placeholder="Tên" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "Email không hợp lệ!",
                        },
                        {
                            required: true,
                            message: "Hãy nhập email của bạn!",
                        },
                    ]}
                >
                    <Input placeholder="E-mail" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[
                        {
                            required: true,
                            message: "Hãy nhập mật khẩu của bạn!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Mật khẩu" />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Xác nhận mật khẩu"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Hãy xác nhận lại mật khẩu!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        "Mật khẩu xác nhận lại không khớp!"
                                    )
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Xác nhận mật khẩu" />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-fit bg-green-500 py-3 px-10 text-lg font-bold text-white rounded-md hover:bg-green-600 mx-auto flex items-center justify-center"
                    >
                        {isLoading ? <Loading size="small" /> : "Đăng kí"}
                    </Button>
                </Form.Item>
            </Form>
            <p
                onClick={() => router.push("/login")}
                className="-mt-2 cursor-pointer text-blue-600 text-sm text-center hover:underline"
            >
                Bạn đã có tài khoản ư?
            </p>
        </div>
    );
};
